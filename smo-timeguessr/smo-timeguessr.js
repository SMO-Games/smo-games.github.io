const categories = [
    "100%", "124 Moons", "All Captures", "All Coin Stacks", "All GP Moons", "All Moons", "All Moons NPG",
    "All Music", "All Purple Coins", "All Story Moons", "All Sub Areas", "Any%", "Dark Side", "Dark Side Dupes", 
    "Dark Side No Revisits", "Darker Side", "Darker Side Dupes", "Double Any%", "Festival%", "Min Caps Any%", "Min Caps Darker", 
    "Moon List Any%", "Nipple%", "Star%", "World Peace"
];
const categoryYears = [8, 5, 7, 4, 2]
const years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];
// for run info
const runScreenshot = document.getElementById("runScreenshot");
const runSplitDisplay = document.getElementById("runSplit");
const runTimeDisplay = document.getElementById("runTime");
const runPlayerDisplay = document.getElementById("runPlayer");
// for guessing
let guesses = 0;
const allowedGuesses = 5;
let score = 10500;
const categoryGuess = document.getElementById("categoryInput");
const yearGuess = document.getElementById("yearInput");
const guessCount = document.getElementById("guessCount");
const submitButton = document.getElementById("guessSubmit");
const inputErrorMessage = document.getElementById("inputErrorMessage");
// for info dialogue
const infoDialogue = document.getElementById("infoDialogue");
const infoWrapper = document.querySelector(".infoWrapper");
// for game over dialogue
const gameOverDialogue = document.getElementById("gameOverDialogue");
const gameOverWrapper = document.querySelector(".gameOverWrapper");
const resultText = document.getElementById("resultText");
const scoreText = document.getElementById("scoreText");
const runInfoText = document.getElementById("runInfoText");
const viewResultsButton = document.getElementById("viewResultsBtn");
// for countdown
const countdown = document.getElementById("countdown");
// for date shenanigans
let tomorrow = new Date();
tomorrow.setHours(24, 0, 0, 0); // sets new date to tomorrow midnight
const date = new Date();
const day = String(date.getDate());
const month = String(date.getMonth() + 1); // month is 0 indexed, so +1
const year = String(date.getFullYear());
let fullDate = Number(`${day.padStart(2, "0")}${month.padStart(2, "0")}${year}`); // format date as DDMMYYYY to use as seed
// find number of days since the game began to find game number
const start = new Date("2026-03-20"); // actually started on the 21st, but that would 0 index it
const end = new Date(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`); // put in current date as YYYY-MM-DD
const timeDifference = end - start; // find difference in milliseconds
const daysSinceStart = Math.ceil(timeDifference / (1000 * 3600 * 24));
// expiry date for cookie stats
const statsExpiryDate = new Date(2145916800 * 1000) // 1 January 2038 00:00:00


// seeded random https://medium.com/@modos.m98/creating-a-seeded-random-string-generator-in-javascript-3165aae1c2d5
function mulberry32(seed) {
    return function() {
        let t = (seed += 0x6D2B79F5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
// get random number to be used for daily random
//const runnerSeed = mulberry32(fullDate);
const randomRun = Math.random();
//const randomRun = runnerSeed();


// create datalist for given array and input box
function buildDatalist(subjectName, subjectArray) {
    let list = document.getElementById(`${subjectName}`);
    for (let i = 0; i < subjectArray.length; i++) {
        let option = document.createElement("option");
        let text = document.createTextNode(subjectArray[i]);
        option.appendChild(text);
        list.appendChild(option);
    };
};
// make datalists for categories and years
buildDatalist("categories", categories);
buildDatalist("years", years);


// PICK RANDOM CATEGORY
console.log(randomRun)
console.log(Math.floor(randomRun*5))
let random_category = categories[Math.floor(randomRun*5)].replace("%", "")
let random_year = Math.floor(Math.random() * categoryYears[Math.floor(randomRun*5)] + 1)
const filepath = `screenshots/${random_category}/${random_year}`; // file path to screenshots
console.log(filepath)
const runInfo = `${filepath}/info.json`; // get file for data

// set image
runScreenshot.src = `${filepath}/hidden.jpg`;


function submitGuess(){
    let isValidGuess = true;

    // VALIDATE GUESS
    // if category is not in list
    if(!categories.includes(categoryGuess.value)){
        isValidGuess = false;
        inputErrorMessage.textContent = "Invalid category!"
        setTimeout(() => {inputErrorMessage.textContent = ""}, 3000)
    }
    // if year is not in list
    if(!years.includes(yearGuess.value)){
        isValidGuess = false;
        inputErrorMessage.textContent = "Invalid year!"
        setTimeout(() => {inputErrorMessage.textContent = ""}, 3000)
    }

    if(isValidGuess){
        // update guess count
        guesses++;
        guessCount.textContent = `Guesses: ${guesses}/${allowedGuesses}`

        // get run data
        fetch(runInfo)
        .then(response => response.json())
        .then(values => {
            const category = values.category;
            const year = values.year;
            const split = values.split;
            const time = values.time;
            const player = values.player;

            let categoryText = "";
            let yearText = "";
            let categoryDistance = 0;
            let yearDistance = 0;

            // set run info text for game over dialogue
            runInfoText.innerText = `The run was:\n${category}\nin ${year}\nby ${player}`

            // if not the same category, get the category distance
            if(!(categoryGuess.value == category)){
                categoryDistance = (graph.Dijkstra(categoryGuess.value, category)).length - 1;
                // failsafe if distance is erroneously 0
                if(categoryDistance == 0){
                    categoryDistance = 1;
                }
                else if(categoryDistance == 1){
                    categoryText = "Very close";
                }
                else if(categoryDistance == 2){
                    categoryText = "Close";
                }
                else if(categoryDistance > 2){
                    categoryText = "Far away";
                }
                else{
                    categoryText = "❌";
                }
            }
            // if same category, set to correct
            else{
                console.log("test");
                categoryDistance = 0;
                categoryText = "✅";
            }

            // if not the same year, get the year distance
            if(!(yearGuess.value == year)){
                yearDistance = Math.abs(Number(yearGuess.value) - Number(year));

                if(Number(yearGuess.value) > Number(year)){
                  yearText = "Earlier";
                }
                else if(Number(yearGuess.value) < Number(year)){
                  yearText = "Later";
                }
                else{
                  yearText = "❌";
                }
            }
            // if same year, set to correct
            else{
                yearDistance = 0;
                yearText = "✅"
            }

            // BUILD TABLE
            let tableParent = document.createElement("table");

            // make headers
            let tableHeaders = document.createElement("tr");
            let headerTitles = [" ", "Guess", "Correct?"]
            // add each header
            for(let headerTitle of headerTitles){
                let title = document.createElement("th");
                title.textContent = headerTitle;
                tableHeaders.appendChild(title);
            }
            tableParent.appendChild(tableHeaders);

            // add category row
            let tableCategory = document.createElement("tr");
            let categoryTitles = ["Category", categoryGuess.value, categoryText];
            // add each element
            for(let categoryTitle of categoryTitles){
                let title = document.createElement("td");
                title.textContent = categoryTitle;

                // make bold if the category label
                if(categoryTitle == "Category"){
                    title.style.fontWeight = "bold";
                }

                tableCategory.appendChild(title);
            }
            tableParent.appendChild(tableCategory);

            // add category row
            let tableYear = document.createElement("tr");
            let yearTitles = ["Year", yearGuess.value, yearText];
            // add each element
            for(let yearTitle of yearTitles){
                let title = document.createElement("td");
                title.textContent = yearTitle;

                // make bold if the year label
                if(yearTitle == "Year"){
                    title.style.fontWeight = "bold";
                }

                tableYear.appendChild(title);
            }
            tableParent.appendChild(tableYear);

            // add table to page
            tableParent.classList.add("center");
            document.getElementById("guessInput").after(tableParent);


            // reveal information based on guesses
            // reveal split after 1 guess
            if(guesses == 1){
                runSplitDisplay.textContent = `Current Split: ${split}`;
            }
            // reveal time after 2 guesses
            if(guesses == 2){
                runTimeDisplay.textContent = `Current Time: ${time}`;
            }
            // reveal player after 3 guesses
            if(guesses == 3){
                runPlayerDisplay.textContent = `Player: ${player}`;
            }
            // reveal layout after 4 guesses
            if(guesses == 4){
                runScreenshot.src = `${filepath}/revealed.jpg`;
            }

            // wipe input fields
            categoryGuess.value = "";
            yearGuess.value = "";


            // adjust score
            score -= categoryDistance * 200;
            score -= yearDistance * 200;
            score -= 500; // -500 per guess
            // prevent negative score
            if(score < 0){
                score = 0;
            }
            scoreText.textContent = `Your score: ${score}`;
            

            // end game if correct
            if(categoryText == "✅" && yearText == "✅"){
                submitButton.style.display = "none";
                viewResultsButton.style.display = "block";
                categoryGuess.disabled = true;
                yearGuess.disabled = true;
                
                // make plural if more than 1 guess
                let isPlural = "";
                if(guesses > 1){
                    isPlural = "es";
                }
                resultText.textContent = `You won in ${guesses} guess${isPlural}!`

                openGameOverDialogue();
            }


            // end game after 5 guesses
            else if(guesses == allowedGuesses){
                submitButton.style.display = "none";
                viewResultsButton.style.display = "block";
                categoryGuess.disabled = true;
                yearGuess.disabled = true;

                resultText.textContent = `You lost after 5 guesses ☹️`

                openGameOverDialogue();
            }
        }
        );
    };
};


// manage countdown timer
let countdownInterval = setInterval(() => {
    // get immediate time and how much is left to tomorrow
    let currentTime = new Date().getTime();
    let timeLeft = tomorrow - currentTime;
    // format into (h)h:mm:ss
    let hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000));
    let formattedTimeLeft = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
    // update countdown text
    if(timeLeft < 0){ // if finished
        countdown.textContent = `Refresh!`;
        clearInterval(countdownInterval); // end JS timer
    }
    else{ // if not finished
        countdown.textContent = formattedTimeLeft;
    }
})

// copy results to clipboard when button clicked
// function copyResults(){
//     let formattedResults = `WRguessr ${daysSinceStart} [${guesses}/${allowedGuesses}]\n${gameResults}${gameURL}`;
//     navigator.clipboard.writeText(formattedResults);
//     confirmCopied.textContent = "Results copied!";
//     setTimeout(() => {confirmCopied.textContent = ""}, 2000) // remove results copied text after 2 seconds
// };


// info dialogue
// open / close info dialogue
function openInfoDialogue(){
    infoDialogue.showModal();
}
function exitInfoDialogue(){
    infoDialogue.close();
}
// lets you close the dialogue by clicking anywhere outside of it
infoDialogue.addEventListener("click", (e) => {
    if(!infoWrapper.contains(e.target)){
        exitInfoDialogue();
    }
});
// game over dialogue
// open / close game over dialogue
function openGameOverDialogue(){
    gameOverDialogue.showModal();
}
function exitGameOverDialogue(){
    gameOverDialogue.close();
}
// lets you close the dialogue by clicking anywhere outside of it
gameOverDialogue.addEventListener("click", (e) => {
    if(!gameOverWrapper.contains(e.target)){
        exitGameOverDialogue();
    }
});








// shortest path to connect categories
// FROM: https://gist.github.com/Prottoy2938/66849e04b0bac459606059f5f9f3aa1a
//helper class for PriorityQueue
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

//Dijkstra's algorithm only works on a weighted graph.

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("100%");
graph.addVertex("124 Moons");
graph.addVertex("All Captures");
graph.addVertex("All Coin Stacks");
graph.addVertex("All GP Moons");
graph.addVertex("All Moons");
graph.addVertex("All Moons NPG");
graph.addVertex("All Music");
graph.addVertex("All Purple Coins");
graph.addVertex("All Story Moons");
graph.addVertex("All Sub Areas");
graph.addVertex("Any%");
graph.addVertex("Dark Side");
graph.addVertex("Dark Side Dupes");
graph.addVertex("Dark Side No Revisits");
graph.addVertex("Darker Side");
graph.addVertex("Darker Side Dupes");
graph.addVertex("Double Any%");
graph.addVertex("Festival%");
graph.addVertex("Min Caps Any%");
graph.addVertex("Min Caps Darker");
graph.addVertex("Moon List Any%");
graph.addVertex("Nipple%");
graph.addVertex("Star%");
graph.addVertex("World Peace");

graph.addEdge("Star%", "Min Caps Any%", 1);
graph.addEdge("Min Caps Any%", "Min Caps Darker", 1);
graph.addEdge("Min Caps Darker", "Darker Side", 1);
graph.addEdge("Min Caps Any%", "Any%", 1);
graph.addEdge("All Purple Coins", "Any%", 1);
graph.addEdge("Festival%", "Any%", 1);
graph.addEdge("Moon List Any%", "All Story Moons", 1);
graph.addEdge("All Story Moons", "World Peace", 1);
graph.addEdge("All Music", "World Peace", 1);
graph.addEdge("124 Moons", "Any%", 1);
graph.addEdge("124 Moons", "Double Any%", 1);
graph.addEdge("Double Any%", "Dark Side No Revisits", 1);
graph.addEdge("Dark Side No Revisits", "Dark Side", 1);
graph.addEdge("Dark Side No Revisits", "All Moons NPG", 1);
graph.addEdge("All Moons NPG", "All Sub Areas", 1);
graph.addEdge("All Moons NPG", "All Moons", 1);
graph.addEdge("All Moons", "Darker Side", 1);
graph.addEdge("All Moons", "100%", 1);
graph.addEdge("100%", "Darker Side Dupes", 1);
graph.addEdge("100%", "All Coin Stacks", 1);
graph.addEdge("All Coin Stacks", "Dark Side Dupes", 1);
graph.addEdge("All Coin Stacks", "Nipple%", 1);
graph.addEdge("Nipple%", "Any%", 1);
graph.addEdge("Any%", "World Peace", 1);
graph.addEdge("Any%", "Dark Side", 1);
graph.addEdge("World Peace", "All GP Moons", 1);
graph.addEdge("Dark Side", "All GP Moons", 1);
graph.addEdge("World Peace", "Dark Side", 1);
graph.addEdge("World Peace", "All Coin Stacks", 1);
graph.addEdge("World Peace", "All Captures", 1);
graph.addEdge("All Captures", "Darker Side", 1);
graph.addEdge("Darker Side", "Darker Side Dupes", 1);
graph.addEdge("Darker Side", "All Sub Areas", 1);
graph.addEdge("Dark Side Dupes", "Darker Side Dupes", 1);
graph.addEdge("Dark Side", "Dark Side Dupes", 1);
graph.addEdge("Dark Side", "124 Moons", 1);
graph.addEdge("Dark Side", "Darker Side", 1);
// console.log(graph.Dijkstra("Dark Side", "Darker Side"));