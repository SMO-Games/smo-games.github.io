const moons = [
    [1, "Long Journey's End", "Darker", "https://mario.wiki.gallery/images/3/36/SMO_Shot_-_Darker_Side.jpg"],
    [2, "A Traditional Festival", "Metro", "https://mario.wiki.gallery/images/0/05/SMO_Metro_Moon_7.png"],
    [3, "Showdown at Bowser's Castle", "Bowser's", "https://mario.wiki.gallery/images/0/00/ShowdownatBowserCastle.png"],
    [4, "Bench Friends", "Metro", "https://mario.wiki.gallery/images/d/d7/SMO_Metro_Moon_26.png"],
    [5, "Loose-Tile Trackdown", "Mushroom", "https://mario.wiki.gallery/images/b/bf/SMO_Mushroom_Moon_26.png"],
    [6, "Across the Mysterious Clouds", "Cascade", "https://mario.wiki.gallery/images/f/fd/SMO_Cascade_Moon_37.png"],
    [7, "Waves of Poison: Hop to It!", "Lake", "https://mario.wiki.gallery/images/0/05/SMO_Lake_Moon_42.png"],
    [8, "Volcano Cave Cruisin'", "Luncheon", "https://mario.wiki.gallery/images/7/7c/SMO_Luncheon_Moon_65.png"],
    [9, "Jump, Grab, and Climb Some More", "Lake", "https://mario.wiki.gallery/images/9/96/SMO_Lake_Moon_25.png"],
    [10, "All the Cracks are Fixed", "Luncheon", "https://mario.wiki.gallery/images/0/07/SMO_Luncheon_Moon_22.png"],
    [11, "Searching the Frog Pond", "Cap", "https://mario.wiki.gallery/images/1/1b/SMO_Cap_Moon_10.png"],
    [12, "Luncheon Kingdom Koopa Freerunning", "Luncheon", "https://mario.wiki.gallery/images/2/24/SMO_Luncheon_Moon_55.png"],
    [12, "Scaling Pitchblack Mountain", "Metro", "https://mario.wiki.gallery/images/8/8b/SMO_Metro_Moon_76.png"],
    [12, "Hey Out There, Captain Toad!", "Wooded", "https://mario.wiki.gallery/images/e/e9/SMO_Wooded_Moon_20.png"],
    [15, "Volcano Cave and Mysterious  Clouds", "Luncheon", "https://mario.wiki.gallery/images/d/d6/SMO_Luncheon_Moon_66.png"],
    [16, "Waves of Poison: Hoppin' Over", "Lake", "https://mario.wiki.gallery/images/d/d7/SMO_Lake_Moon_41.png"],
    [17, "The Forgotten Treasure", "Cap", "https://mario.wiki.gallery/images/4/40/SMO_Cap_Moon_12.png"],
    [18, "Secrets of the Frog Pond", "Cap", "https://mario.wiki.gallery/images/f/f0/SMO_Cap_Moon_11.png"],
    [19, "Bowser's Kingdom Koopa Freerunning", "Bowser's", "https://mario.wiki.gallery/images/9/94/SMO_Bowser%27s_Moon_41.png"],
    [20, "Wooded Kingdom Koopa Freerunning", "Wooded", "https://mario.wiki.gallery/images/2/2a/SMO_Wooded_Moon_69.png"],
    [20, "Atop a Wall Among the Clouds", "Cascade", "https://mario.wiki.gallery/images/9/9d/SMO_Cascade_Moon_38.png"],
    [22, "Jump, Grab, Cling and Climb", "Lake", "https://mario.wiki.gallery/images/3/37/SMO_Lake_Moon_24.png"],
    [23, "Up on the Big Screen", "Metro", "https://mario.wiki.gallery/images/a/a1/SMO_Metro_Moon_64.png"],
    [24, "Breakdown Road: Final Challenge!", "Dark", "https://mario.wiki.gallery/images/d/d1/SMO_Dark_Side_Moon_4.png"],
    [24, "Twist 'n' Turn-Up Treasure", "Lost", "https://mario.wiki.gallery/images/d/db/SMO_Lost_Moon_17.png"],
    [26, "Metro Kingdom Koopa Freerunning", "Metro", "https://mario.wiki.gallery/images/f/f0/SMO_Metro_Moon_74.png"],
    [27, "Soaring Over Forgotten Isle!", "Lost", "https://mario.wiki.gallery/images/6/60/SMO_Lost_Moon_18.png"],
    [28, "Our First Power Moon", "Cascade", "https://mario.wiki.gallery/images/a/ae/SMO_Cascade_Moon_1.png"],
    [29, "RC Car Challenge", "Metro", "https://mario.wiki.gallery/images/6/67/SMO_Metro_Moon_73.png"],
    [29, "How Do They Take Out the Trash?", "Metro", "https://mario.wiki.gallery/images/1/16/SMO_Metro_Moon_18.png"],
    [31, "Spinning Athletics End Goal", "Luncheon", "https://mario.wiki.gallery/images/2/2b/SMO_Luncheon_Moon_45.png"],
    [31, "Cave Gardening", "Lost", "https://mario.wiki.gallery/images/0/0c/SMO_Lost_Moon_14.png"],
    [33, "Breakdown Road: Hurry!", "Dark", "https://mario.wiki.gallery/images/1/19/SMO_Dark_Side_Moon_3.png"],
    [33, "The Bullet Bill Maze: Break Through!", "Sand", "https://mario.wiki.gallery/images/4/49/SMO_Sand_Moon_56.png"], // get better image
    [35, "Fork Flickin' to the Summit", "Luncheon", "https://mario.wiki.gallery/images/5/51/SMO_Luncheon_Moon_41.png"],
    [35, "Mario Signs His Name", "Metro", "https://mario.wiki.gallery/images/f/fd/SMO_Metro_Moon_55.png"],
    [37, "Princess Peach, Home Again!", "Mushroom", "https://mario.wiki.gallery/images/b/b0/SMO_Mushroom_Moon_43.png"],
    [37, "Totally Classic!", "Mushroom", "https://mario.wiki.gallery/images/5/5f/SMO_Mushroom_Moon_27.png"], // get better image
    [37, "The Bound Bowl Grand Prix", "Snow", "https://mario.wiki.gallery/images/6/62/SMO_Snow_Moon_5.png"],
    [37, "'Round-the-World Tourist", "Sand", "https://mario.wiki.gallery/images/9/96/SMO_Sand_Moon_68.png"],
    [41, "Courtyard Chest Trap", "Mushroom", "https://mario.wiki.gallery/images/a/a0/SMO_Mushroom_Moon_28.png"], // get better image?
    [41, "Diving from the Big Pot!", "Luncheon", "https://mario.wiki.gallery/images/1/14/SMO_Luncheon_Moon_53.png"],
    [41, "A Request from the Mayor", "Metro", "https://mario.wiki.gallery/images/f/fb/SMO_Metro_Moon_57.png"],
    [44, "Arrival at Rabbit Ridge!", "Dark", "https://mario.wiki.gallery/images/9/9b/Arrival_at_Rabbit_Ridge.png"],
    [44, "Climb the Wooden Tower", "Bowser's", "https://mario.wiki.gallery/images/b/bb/SMO_Bowser%27s_Moon_61.png"],
    [44, "Showdown on the Inverted Pyramid", "Sand", "https://mario.wiki.gallery/images/e/e0/SMO_Sand_Moon_3.png"],
    [47, "Taking Notes: In the Private Room", "Metro", "https://mario.wiki.gallery/images/3/37/SMO_Metro_Moon_33.png"],
    [47, "Spin the Hat, Get a Prize", "Cap", "https://mario.wiki.gallery/images/c/c6/SMO_Cap_Moon_22.png"],
    [49, "Unzip the Chasm", "Lake", "https://mario.wiki.gallery/images/8/89/SMO_Lake_Moon_22.png"], // get better image
    [50, "Ice Cave Treasure", "Sand", "https://mario.wiki.gallery/images/f/fa/SMO_Sand_Moon_50.png"],
    [51, "Taking Notes: Stretch and Shrink", "Lost", "https://mario.wiki.gallery/images/8/88/SMO_Lost_Moon_29.png"],
    [52, "Wandering Cactus", "Sand", "https://mario.wiki.gallery/images/d/db/SMO_Sand_Moon_40.png"],
    [53, "Battle with the Lord of Lightning!", "Ruined", "https://mario.wiki.gallery/images/b/bc/SMO_Ruined_Dragon_Preparing_Attack.png"],
    [53, "Flying Far Away from Gusty Bridges", "Cascade", "https://mario.wiki.gallery/images/c/ca/SMO_Cascade_Moon_40.png"],
    [55, "Taking Notes: Spinning Athletics", "Luncheon", "https://mario.wiki.gallery/images/4/48/SMO_Luncheon_Moon_46.png"],
    [55, "Free Parking: Leap of Faith", "Metro", "https://mario.wiki.gallery/images/5/5f/SMO_Metro_Moon_60.png"],
    [57, "Left at the Café?", "Metro", "https://mario.wiki.gallery/images/b/b7/SMO_Metro_Moon_16.png"],
    [58, "Poke! Roll!", "Seaside", "https://mario.wiki.gallery/images/8/86/SMO_Seaside_Moon_69.png"], // get better image
    [59, "Sunken Treasure in the Cloud Sea", "Seaside", "https://mario.wiki.gallery/images/c/c6/SMO_Seaside_Moon_44.png"], // better image
    [60, "The Sixth Face", "Cloud", "https://mario.wiki.gallery/images/2/27/SMO_Cloud_Moon_9.png"], // better image?
    [61, 'Good Morning, Captain Toad!', '', 'https://mario.wiki.gallery/images/d/d7/SMO_Cascade_Moon_11.png'],
    [61, 'King of the Cube!', '', 'https://mario.wiki.gallery/images/4/42/SMO_Cloud_Moon_8.png'],
    [63, 'The Hole in the Desert', '', 'https://mario.wiki.gallery/images/6/65/SMO_Sand_Moon_4.png'],
    [63, 'Up in the Rafters', '', 'https://mario.wiki.gallery/images/1/1d/SMO_Moon_Moon_14.png'],
    [65, 'Welcome Back, Jaxi!', '', 'https://mario.wiki.gallery/images/5/5b/SMO_Sand_Moon_39.png'],
    [66, 'Strange Neighborhood', '', 'https://mario.wiki.gallery/images/8/80/SMO_Sand_Moon_60.png'],
    [67, 'Very Nice Shot with the Chain Chomp!', '', 'https://mario.wiki.gallery/images/9/9c/SMO_Cascade_Moon_15.png'], // better image
    [68, 'Get Some Rest, Captain Toad', '', 'https://mario.wiki.gallery/images/d/d3/SMO_Lost_Moon_20.png'],
    [69, 'Beneath the Roots of the Moving Tree', '', 'https://mario.wiki.gallery/images/c/c7/SMO_Wooded_Moon_34.png'],
    [70, 'Remotely Captured Car', '', 'https://mario.wiki.gallery/images/b/b9/SMO_Metro_Moon_31.png'],
    [71, 'Our Secret Little Room', '', 'https://mario.wiki.gallery/images/e/ee/SMO_Lake_Moon_17.png'],
    [71, 'Taking Notes: In the Folding Screen', '', 'https://mario.wiki.gallery/images/1/14/SMO_Bowser%27s_Moon_32.png'],
    [71, 'Treasure of the Waterfall Basin', '', 'https://mario.wiki.gallery/images/c/c5/SMO_Cascade_Moon_6.png'],
    [74, 'Line It Up, Blow It Up', '', 'https://mario.wiki.gallery/images/2/2a/SMO_Lost_Moon_28.png'],
    [75, 'Thanks for the Charge!', '', 'https://mario.wiki.gallery/images/c/cb/SMO_Wooded_Moon_9.png'],
    [76, 'Beneath the Rolling Vegetables', '', 'https://mario.wiki.gallery/images/7/72/SMO_Luncheon_Moon_21.png'],
    [77, 'The Treasure of Jaxi Ruins', '', 'https://mario.wiki.gallery/images/8/8d/SMO_Sand_Moon_24.png'], // better image
    [77, 'Under the Bowser Statue', '', 'https://mario.wiki.gallery/images/e/ec/SMO_Moon_Moon_9.png'],
    [77, 'Bon Appétit, Captain Toad!', '', 'https://mario.wiki.gallery/images/5/59/SMO_Luncheon_Moon_33.png'],
    [80, 'Cascade Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/5/5b/SMO_Cascade_Moon_36.png'],
    [81, 'Back Way Up the Mountain', '', 'https://mario.wiki.gallery/images/e/e9/SMO_Wooded_Moon_6.png'],
    [81, 'City Hall Lost & Found', '', 'https://mario.wiki.gallery/images/9/97/SMO_Metro_Moon_34.png'],
    [83, 'Precision Rolling', '', 'https://mario.wiki.gallery/images/a/a2/SMO_Cap_Moon_31.png'],
    [83, 'Iceburn Circuit', '', 'https://mario.wiki.gallery/images/4/4b/SMO_Snow_Moon_53.png'],
    [85, 'Employees Only', '', 'https://mario.wiki.gallery/images/7/7c/SMO_Sand_Moon_43.png'],
    [85, 'Underground Treasure Chest', '', 'https://mario.wiki.gallery/images/8/8d/SMO_Sand_Moon_47.png'],
    [87, 'Good Evening, Captain Toad!', '', 'https://mario.wiki.gallery/images/5/57/SMO_Cap_Moon_4.png'],
    [88, 'Below Breakdown Road', '', 'https://mario.wiki.gallery/images/e/ed/SMO_Wooded_Moon_76.png'], // better image
    [89, 'Cap Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/b/bd/SMO_Cap_Moon_15.png'],
    [90, "Fork Flickin' Detour", '', 'https://mario.wiki.gallery/images/a/ab/SMO_Luncheon_Moon_42.png'],
    [91, 'Motor Scooter: Escape!', '', 'https://mario.wiki.gallery/images/5/57/SMO_Metro_Moon_49.png'], // better image
    [92, 'Roll On and On', '', 'https://mario.wiki.gallery/images/0/0b/SMO_Cap_Moon_30.png'],
    [93, 'Sinking Colossal Ruins: Hurry!', '', 'https://mario.wiki.gallery/images/d/d1/SMO_Sand_Moon_87.png'],
    [94, "How You Doin', Captain Toad?", '', 'https://mario.wiki.gallery/images/e/e0/SMO_Metro_Moon_24.png'],
    [95, 'Dashing Above and Beyond!', '', 'https://mario.wiki.gallery/images/8/8d/SMO_Snow_Moon_25.png'], // better image?
    [96, 'Across the Gusty Bridges', '', 'https://mario.wiki.gallery/images/b/b0/SMO_Cascade_Moon_39.png'],
    [97, 'Taking Notes with a Spinning Throw', '', 'https://mario.wiki.gallery/images/f/f2/SMO_Bowser%27s_Moon_55.png'],
    [98, 'Light from the Ceiling', '', 'https://mario.wiki.gallery/images/5/52/SMO_Mushroom_Moon_25.png'],
    [99, 'Dizzying Heights', '', 'https://mario.wiki.gallery/images/9/9d/SMO_Metro_Moon_12.png'],
    [101, 'Down and Up the Spinning Tower', '', 'https://mario.wiki.gallery/images/3/3e/SMO_Bowser%27s_Moon_34.png'],
    [102, '2D Boost from Bullet Bill', '', 'https://mario.wiki.gallery/images/a/aa/SMO_Mushroom_Moon_32.png'],
    [102, 'Bullet Billding', '', 'https://mario.wiki.gallery/images/5/5e/SMO_Metro_Moon_47.png'], // better image
    [104, 'Dashing Over Cold Water!', '', 'https://mario.wiki.gallery/images/1/17/SMO_Snow_Moon_24.png'], // better image
    [105, 'Golden Turnip Recipe 2', '', 'https://mario.wiki.gallery/images/7/77/SMO_Luncheon_Moon_16.png'],
    [106, 'Invader in the Sky Garden', '', 'https://mario.wiki.gallery/images/e/e1/SMO_Wooded_Moon_63.png'],
    [106, 'Surprise Clown!', '', 'https://mario.wiki.gallery/images/8/86/SMO_Metro_Moon_56.png'],
    [106, 'Spinning-Platforms Treasure', '', 'https://mario.wiki.gallery/images/0/05/SMO_Wooded_Moon_26.png'],
    [109, 'The Caged Gold', '', 'https://mario.wiki.gallery/images/a/ab/SMO_Lost_Moon_19.png'], // BETTER IMAGE
    [110, 'Metro Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/c/cb/SMO_Metro_Moon_19.png'], // better image
    [110, 'A Successful Repair Job', '', 'https://mario.wiki.gallery/images/2/20/SMO_Lake_Moon_20.png'], // better image
    [112, 'Captain Toad on the Dark Side!', '', 'https://mario.wiki.gallery/images/e/ee/SMO_Dark_Side_Moon_2.png'], //
    [113, 'Full-Throttle Scooting!', '', 'https://mario.wiki.gallery/images/d/d8/SMO_Metro_Moon_81.png'], //
    [114, "New Donk City's Pest Problem", '', 'https://mario.wiki.gallery/images/8/8f/SMO_Metro_Moon_1.png'],
    [115, 'Free Parking: Rooftop Hop', '', 'https://mario.wiki.gallery/images/3/37/SMO_Metro_Moon_25.png'],
    [116, 'Making the Secret Flower Field Bloom', '', 'https://mario.wiki.gallery/images/7/77/SMO_Wooded_Moon_27.png'],
    [116, 'Chomp Through the Rocks', '', 'https://mario.wiki.gallery/images/f/f4/SMO_Cascade_Moon_3.png'], //
    [118, 'I Feel Underdressed', '', 'https://mario.wiki.gallery/images/9/99/SMO_Lake_Moon_21.png'], //
    [119, 'Super-Secret Zipper', '', 'https://mario.wiki.gallery/images/8/87/SMO_Lake_Moon_23.png'], //
    [119, 'Moon Shards in the Sand', '', 'https://mario.wiki.gallery/images/4/42/SMO_Sand_Moon_2.png'], //
    [121, 'Above a Strange Neighborhood', '', 'https://mario.wiki.gallery/images/1/11/SMO_Sand_Moon_61.png'],
    [122, 'Hidden in the Scrap', '', 'https://mario.wiki.gallery/images/1/13/SMO_Metro_Moon_15.png'],
    [123, 'Ride the Jetstream', '', 'https://mario.wiki.gallery/images/0/02/SMO_Seaside_Moon_7.png'], //
    [124, 'On Top of the Stone Archway', '', 'https://mario.wiki.gallery/images/4/46/SMO_Sand_Moon_11.png'],
    [125, 'Defend the Secret Flower Field!', '', 'https://mario.wiki.gallery/images/4/44/SMO_Wooded_Moon_4.png'],
    [126, 'Rewiring the Neighborhood', '', 'https://mario.wiki.gallery/images/a/af/SMO_Metro_Moon_39.png'], //
    [127, 'Celebrating in the Streets!', '', 'https://mario.wiki.gallery/images/a/ae/SMO_Metro_Moon_36.png'], //
    [128, 'Past the Peculiar Pipes', '', 'https://mario.wiki.gallery/images/2/28/SMO_Wooded_Moon_30.png'], //
    [129, 'Wading in the Cloud Sea', '', 'https://mario.wiki.gallery/images/f/fa/SMO_Seaside_Moon_43.png'],
    [130, "I'm Not Cold!", '', 'https://mario.wiki.gallery/images/a/ae/SMO_Snow_Moon_20.png'],
    [131, 'The Shiverian Treasure Chest', '', 'https://mario.wiki.gallery/images/a/ab/SMO_Snow_Moon_11.png'],
    [132, 'Taking Notes: Snow Path Dash', '', 'https://mario.wiki.gallery/images/5/5b/SMO_Snow_Moon_16.png'],
    [133, 'Just a Hat, Skip, and a Jump', '', 'https://mario.wiki.gallery/images/b/b8/SMO_Cascade_Moon_27.png'],
    [134, 'Fly Through the Narrow Valley', '', 'https://mario.wiki.gallery/images/b/b8/SMO_Seaside_Moon_45.png'], //
    [135, 'Taking Notes: Big Pot Swim', '', 'https://mario.wiki.gallery/images/6/67/SMO_Luncheon_Moon_36.png'],
    [136, 'Stepping Over the Gears', '', 'https://mario.wiki.gallery/images/b/ba/SMO_Luncheon_Moon_63.png'], //
    [136, 'Lighthouse Leaper', '', 'https://mario.wiki.gallery/images/b/b9/SMO_Seaside_Moon_33.png'],
    [138, 'Lost in the Luggage', '', 'https://mario.wiki.gallery/images/8/84/SMO_Sand_Moon_18.png'],
    [138, 'Past the Moving Wall', '', 'https://mario.wiki.gallery/images/b/bd/SMO_Bowser%27s_Moon_9.png'], //
    [140, 'Tucked Away Inside the Tunnel', '', 'https://mario.wiki.gallery/images/4/4e/SMO_Wooded_Moon_11.png'], //
    [141, 'Down Inside the Big Screen', '', 'https://mario.wiki.gallery/images/3/33/SMO_Metro_Moon_65.png'],
    [142, 'Vaulting up a High-Rise', '', 'https://mario.wiki.gallery/images/3/32/SMO_Metro_Moon_46.png'],
    [143, 'Magma Narrow Path', '', 'https://mario.wiki.gallery/images/d/d5/SMO_Luncheon_Moon_39.png'],
    [143, 'Poster Cleanup', '', 'https://mario.wiki.gallery/images/5/5b/SMO_Sand_Moon_78.png'],
    [145, 'Lake Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/7/74/SMO_Lake_Moon_32.png'],
    [145, 'Alcove in the Ruins', '', 'https://mario.wiki.gallery/images/d/d8/SMO_Sand_Moon_6.png'], //
    [145, 'Colossal Ruins: Dash! Jump!', '', 'https://mario.wiki.gallery/images/3/33/SMO_Sand_Moon_86.png'], //
    [145, 'Binding Band Returned', '', 'https://mario.wiki.gallery/images/9/91/SMO_Sand_Moon_67.png'],
    [149, 'High-Altitude Spinning', '', 'https://mario.wiki.gallery/images/9/90/SMO_Snow_Moon_32.png'], //
    [150, 'Reaching Pitchblack Island', '', 'https://mario.wiki.gallery/images/a/a5/SMO_Metro_Moon_77.png'],
    [151, 'Inside the Rotating Maze', '', 'https://mario.wiki.gallery/images/c/c1/SMO_Metro_Moon_43.png'], //
    [152, "Over the Cliff's Edge", '', 'https://mario.wiki.gallery/images/6/6a/SMO_Wooded_Moon_12.png'], ////////
    [153, 'Flying Over the Lava Islands', '', 'https://mario.wiki.gallery/images/a/ad/SMO_Luncheon_Moon_68.png'],
    [154, 'Powering Up the Station', '', 'https://mario.wiki.gallery/images/9/98/SMO_Metro_Moon_63.png'],
    [155, 'Invisible Road: Danger!', '', 'https://mario.wiki.gallery/images/c/c2/SMO_Wooded_Moon_71.png'],
    [156, 'Snow Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/e/e5/SMO_Snow_Moon_35.png'],
    [157, 'The Glass Is Half Full!', '', 'https://mario.wiki.gallery/images/3/34/TheGlassisHalfEmpty.png'],
    [158, 'Atop the Tall Tree', '', 'https://mario.wiki.gallery/images/d/df/SMO_Wooded_Moon_10.png'],
    [159, 'Overlooking the Desert Town', '', 'https://mario.wiki.gallery/images/4/44/SMO_Sand_Moon_5.png'],
    [160, 'Hidden Chasm Passage', '', 'https://mario.wiki.gallery/images/f/f0/SMO_Cascade_Moon_17.png'],
    [161, 'Lost Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/9/96/SMO_Lost_Moon_24.png'],
    [162, 'Toad Defender', '', 'https://mario.wiki.gallery/images/a/aa/SMO_Mushroom_Moon_17.png'],
    [163, "Secret Path to Peach's Castle!", '', 'https://mario.wiki.gallery/images/2/21/SMO_Mushroom_Moon_39.png'],
    [164, 'Merci, Dorrie!', '', 'https://mario.wiki.gallery/images/d/df/SMO_Seaside_Moon_14.png'],
    [165, 'Running the Flower Road', '', 'https://mario.wiki.gallery/images/f/fd/SMO_Snow_Moon_54.png'],
    [165, 'Wrecked Rock Block', '', 'https://mario.wiki.gallery/images/8/84/SMO_Lost_Moon_11.png'],
    [167, 'Taking Notes: Swimming in Magma', '', 'https://mario.wiki.gallery/images/a/ac/SMO_Luncheon_Moon_23.png'],
    [168, 'Big Broodal Battle', '', 'https://mario.wiki.gallery/images/a/ae/BigBroodalBattle.png'],
    [168, 'Swinging Scaffolding: Jump!', '', 'https://mario.wiki.gallery/images/8/8a/SMO_Metro_Moon_78.png'],
    [168, 'Ice-Dodging Goomba Stack', '', 'https://mario.wiki.gallery/images/2/2a/SMO_Snow_Moon_18.png'],
    [171, 'Lanterns on the Gear Steps', '', 'https://mario.wiki.gallery/images/3/3e/SMO_Luncheon_Moon_64.png'],
    [172, 'Above the Clouds', '', 'https://mario.wiki.gallery/images/6/6d/SMO_Wooded_Moon_48.png'],
    [173, 'Jump Onto the Transparent Lift', '', 'https://mario.wiki.gallery/images/f/f8/SMO_Sand_Moon_85.png'], //
    [173, 'Elevator Blind Spot', '', 'https://mario.wiki.gallery/images/6/66/SMO_Wooded_Moon_46.png'],
    [175, 'Among the Five Cactuses', '', 'https://mario.wiki.gallery/images/f/f4/SMO_Sand_Moon_36.png'],
    [176, 'Hat-and-Seek: In the Crowd', '', 'https://mario.wiki.gallery/images/8/82/SMO_Metro_Moon_75.png'],
    [177, 'Nice Shot with the Chain Chomp!', '', 'https://mario.wiki.gallery/images/a/a3/SMO_Cascade_Moon_14.png'], //
    [178, 'Found Behind Bars!', '', 'https://mario.wiki.gallery/images/9/90/SMO_Bowser%27s_Moon_26.png'], //
    [178, "On the Giant Bowser Statue's Nose", '', 'https://mario.wiki.gallery/images/d/de/SMO_Bowser%27s_Moon_13.png'],
    [180, 'Atop the Highest Tower', '', 'https://mario.wiki.gallery/images/8/86/SMO_Sand_Moon_1.png'],
    [181, 'Under the Cheese Rocks', '', 'https://mario.wiki.gallery/images/9/97/UndertheCheeseRocks.png'],
    [182, 'Taking Notes: In Low Gravity', '', 'https://mario.wiki.gallery/images/d/d9/SMO_Moon_Moon_34.png'],
    [183, 'Metro Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/b/b6/SMO_Metro_Moon_20.png'],
    [184, 'Fly to the Treasure Chest and Back', '', 'https://mario.wiki.gallery/images/b/b2/SMO_Moon_Moon_13.png'],
    [184, 'Guarded by a Colossal Fossil', '', 'https://mario.wiki.gallery/images/2/29/SMO_Cascade_Moon_30.png'],
    [186, 'Jizo All in a Row', '', 'https://mario.wiki.gallery/images/e/e5/SMO_Bowser%27s_Moon_24.png'],
    [187, 'Inside the Busted Fossil', '', 'https://mario.wiki.gallery/images/a/ab/SMO_Cascade_Moon_33.png'], //
    [188, 'Chasing Klepto', '', 'https://mario.wiki.gallery/images/4/41/SMO_Lost_Moon_34.png'], //
    [189, 'Herding Sheep in the Dunes', '', 'https://mario.wiki.gallery/images/a/ac/SMO_Sand_Moon_33.png'],
    [190, 'Who Piled Garbage on This?', '', 'https://mario.wiki.gallery/images/b/bb/SMO_Metro_Moon_14.png'],
    [191, 'Smart Bombing', '', 'https://mario.wiki.gallery/images/4/4f/SmartBombing.png'], //
    [192, 'End of the Hidden Passage', '', 'https://mario.wiki.gallery/images/b/bf/SMO_Lake_Moon_4.png'], //
    [193, 'Jaxi Reunion!', '', 'https://mario.wiki.gallery/images/5/51/SMO_Sand_Moon_38.png'],
    [194, 'Moon Shards on the Moon', '', 'https://mario.wiki.gallery/images/c/c7/SMO_Moon_Moon_17.png'],
    [195, 'Motor Scooter Daredevil!', '', 'https://mario.wiki.gallery/images/3/3d/SMO_Metro_Moon_80.png'],
    [196, 'Down and Back Breakdown Road', '', 'https://mario.wiki.gallery/images/2/2c/SMO_Wooded_Moon_75.png'],
    [196, 'Dashing Above the Clouds', '', 'https://mario.wiki.gallery/images/7/7d/SMO_Bowser%27s_Moon_37.png'],
    [196, "Love at Peach's Castle", '', 'https://mario.wiki.gallery/images/f/fd/SMO_Mushroom_Moon_16.png'],
    [199, 'A Tourist in the Luncheon Kingdom', '', 'https://mario.wiki.gallery/images/e/ec/SMO_Luncheon_Moon_48.png'],
    [200, 'I Met a Tropical Wiggler!', '', 'https://mario.wiki.gallery/images/f/ff/SMO_Lost_Moon_23.png'],
    [201, 'Off the Beaten Wire', '', 'https://mario.wiki.gallery/images/9/93/SMO_Metro_Moon_40.png'],
    [202, 'Forgotten in the Holding Room', '', 'https://mario.wiki.gallery/images/f/f6/SMO_Snow_Moon_42.png'],
    [202, 'The Invisible Maze', '', 'https://mario.wiki.gallery/images/a/ae/SMO_Sand_Moon_54.png'], //
    [202, 'Hidden Among the Push-Blocks', '', 'https://mario.wiki.gallery/images/9/93/SMO_Cap_Moon_9.png'], //
    [205, 'Sand Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/c/c0/SMO_Sand_Moon_28.png'],
    [205, 'Past the Chasm Lifts', '', 'https://mario.wiki.gallery/images/1/12/SMO_Cascade_Moon_16.png'],
    [207, 'Light the Two Flames', '', 'https://mario.wiki.gallery/images/e/e1/SMO_Luncheon_Moon_31.png'],
    [208, 'Hidden Corridor Under the Floor', '', 'https://mario.wiki.gallery/images/a/a4/SMO_Bowser%27s_Moon_20.png'],
    [209, 'Entrance to Shiveria', '', 'https://mario.wiki.gallery/images/c/cf/SMO_Snow_Moon_6.png'],
    [209, 'Invisible Road: Rush!', '', 'https://mario.wiki.gallery/images/7/7b/SMO_Dark_Side_Moon_5.png'],
    [211, "Invader in Bowser's Castle", '', 'https://mario.wiki.gallery/images/0/0a/SMO_Bowser%27s_Moon_51.png'],
    [212, 'Searching Hexagon Tower', '', 'https://mario.wiki.gallery/images/3/3e/SMO_Bowser%27s_Moon_59.png'],
    [212, 'Cookatiel Showdown!', '', 'https://mario.wiki.gallery/images/e/e0/SMO_Luncheon_Moon_5.png'],
    [214, 'Moon Shards Under Siege', '', 'https://mario.wiki.gallery/images/2/2a/SMO_Metro_Moon_41.png'], //
    [215, 'Dashing Through the Clouds', '', 'https://mario.wiki.gallery/images/5/53/SMO_Bowser%27s_Moon_38.png'],
    [216, 'Taking Notes: Up and Down', '', 'https://mario.wiki.gallery/images/8/83/SMO_Cloud_Moon_6.png'],
    [217, 'Poking the Turret Wall', '', 'https://mario.wiki.gallery/images/3/35/SMO_Bowser%27s_Moon_22.png'],
    [218, 'Invisible Road: Secret!', '', 'https://mario.wiki.gallery/images/8/8d/SMO_Dark_Side_Moon_6.png'],
    [218, 'Roulette Tower: Stopped', '', 'https://mario.wiki.gallery/images/6/66/SMO_Ruined_Moon_4.png'],
    [220, 'Across the Floating Isles', '', 'https://mario.wiki.gallery/images/1/1f/SMO_Cascade_Moon_8.png'],
    [221, 'In a Hole in the Magma', '', 'https://mario.wiki.gallery/images/2/26/SMO_Moon_Moon_10.png'],
    [222, 'Atop a Propeller Pillar', '', 'https://mario.wiki.gallery/images/a/a0/SMO_Lost_Moon_1.png'],
    [223, 'Hanging Between Buildings', '', 'https://mario.wiki.gallery/images/d/dd/SMO_Metro_Moon_67.png'], //
    [224, "Light the Far-Off Lanterns", '', 'https://mario.wiki.gallery/images/b/b4/SMO_Luncheon_Moon_32.png'],
    [224, "Ocean-Bottom Maze: Treasure", '', 'https://mario.wiki.gallery/images/b/b4/SMO_Seaside_Moon_8.png'],
    [226, 'Flooding Pipeway', '', 'https://mario.wiki.gallery/images/3/36/SMO_Wooded_Moon_39.png'],
    [226, 'Wandering in the Fog', '', 'https://mario.wiki.gallery/images/b/bf/SMO_Wooded_Moon_41.png'],
    [228, 'Snowline Circuit Class S', '', 'https://mario.wiki.gallery/images/4/4d/SMO_Snow_Moon_23.png'],
    [229, 'Exterminate the Ogres!', '', 'https://mario.wiki.gallery/images/a/a9/SMO_Bowser%27s_Moon_16.png'],
    [230, 'Alcove Behind the Pillars of Magma', '', 'https://mario.wiki.gallery/images/1/1e/SMO_Luncheon_Moon_29.png'],
    [231, 'Taking Notes: Around the Well', '', 'https://mario.wiki.gallery/images/e/e0/SMO_Mushroom_Moon_11.png'],
    [232, "The Mummy Army's Curse", '', 'https://mario.wiki.gallery/images/5/5a/SMO_Ruined_Moon_10.png'],
    [233, 'Hanging from a High-Rise', '', 'https://mario.wiki.gallery/images/c/c6/SMO_Metro_Moon_45.png'],
    [234, 'Taking Notes: Hurry Upward', '', 'https://mario.wiki.gallery/images/3/30/SMO_Cascade_Moon_35.png'],
    [234, "Bowser's Kingdom Timer Challenge 2", '', 'https://mario.wiki.gallery/images/2/2f/SMO_Bowser%27s_Moon_53.png'],
    [234, 'Treasure Chest in the Narrow Valley', '', 'https://mario.wiki.gallery/images/a/a1/SMO_Seaside_Moon_46.png'],
    [237, 'Atop the Jutting Crag', '', 'https://mario.wiki.gallery/images/3/3f/SMO_Luncheon_Moon_8.png'], //
    [237, 'Flower Road Reach', '', 'https://mario.wiki.gallery/images/4/4e/SMO_Wooded_Moon_44.png'],
    [239, 'Good Job, Captain Toad!', '', 'https://mario.wiki.gallery/images/4/46/SMO_Seaside_Moon_34.png'],
    [240, 'Lake Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/8/8a/SMO_Lake_Moon_11.png'],
    [241, 'Flooding Pipeway Ceiling Secret', '', 'https://mario.wiki.gallery/images/e/ec/SMO_Wooded_Moon_40.png'],
    [242, 'Third Courtyard Outskirts', '', 'https://mario.wiki.gallery/images/b/b3/SMO_Bowser%27s_Moon_56.png'],
    [243, "Let's Go Swimming, Captain Toad!", '', 'https://mario.wiki.gallery/images/8/80/SMO_Lake_Moon_18.png'],
    [244, 'Luncheon Kingdom Timer Challenge 3', '', 'https://mario.wiki.gallery/images/a/a8/SMO_Luncheon_Moon_20.png'],
    [245, 'Surrounded by Tall Mountains', '', 'https://mario.wiki.gallery/images/9/90/SMO_Luncheon_Moon_11.png'],
    [245, 'What the Waves Left Behind', '', 'https://mario.wiki.gallery/images/d/d5/SMO_Seaside_Moon_17.png'],
    [247, 'Thanks, Captain Toad!', '', 'https://mario.wiki.gallery/images/e/e0/SMO_Moon_Moon_19.png'],
    [247, 'Crossing the Cloud Sea', '', 'https://mario.wiki.gallery/images/8/85/SMO_Cloud_Moon_5.png'], //
    [249, "What's in the Box?", '', 'https://mario.wiki.gallery/images/d/d7/SMO_Lake_Moon_5.png'],
    [250, 'Skull Sign in the Transparent Maze', '', 'https://mario.wiki.gallery/images/6/64/SMO_Sand_Moon_55.png'],
    [251, 'Inside a Block at the Gate', '', 'https://mario.wiki.gallery/images/d/d1/SMO_Bowser%27s_Moon_49.png'],
    [252, 'Under the Old Electrical Pole', '', 'https://mario.wiki.gallery/images/0/0f/SMO_Cascade_Moon_31.png'],
    [252, 'On the Lone Pillar', '', 'https://mario.wiki.gallery/images/d/d3/SMO_Sand_Moon_13.png'],
    [254, 'Glittering Above the Pool', '', 'https://mario.wiki.gallery/images/1/1e/SMO_Metro_Moon_11.png'], //
    [255, 'Bonneter Blockade', '', 'https://mario.wiki.gallery/images/7/7b/SMO_Cap_Moon_14.png'],
    [255, 'On the Eastern Pillar', '', 'https://mario.wiki.gallery/images/9/98/SMO_Sand_Moon_76.png'],
    [255, 'I Met a Pokio!', '', 'https://mario.wiki.gallery/images/d/d6/SMO_Bowser%27s_Moon_40.png'],
    [255, "Jizo's Big Adventure", '', 'https://mario.wiki.gallery/images/2/2b/SMO_Bowser%27s_Moon_35.png'],
    [259, 'Above the Iron Mountain Path', '', 'https://mario.wiki.gallery/images/8/87/SMO_Wooded_Moon_60.png'],
    [259, 'Swaying in the Breeze', '', 'https://mario.wiki.gallery/images/2/2d/SMO_Metro_Moon_9.png'],
    [259, 'Overlooking a Bunch of Ingredients', '', 'https://mario.wiki.gallery/images/e/eb/SMO_Luncheon_Moon_13.png'],
    [262, 'On the Cliff Overlooking the Beach', '', 'https://mario.wiki.gallery/images/3/36/SMO_Seaside_Moon_6.png'],
    [262, 'Treasure of the Lava Islands', '', 'https://mario.wiki.gallery/images/4/4d/SMO_Luncheon_Moon_67.png'], //
    [262, 'Taking Notes: On the Wall', '', 'https://mario.wiki.gallery/images/6/6e/SMO_Bowser%27s_Moon_54.png'],
    [262, 'Moon Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/9/9d/SMO_Moon_Moon_33.png'],
    [266, 'Multi Moon Atop the Falls', '', 'https://mario.wiki.gallery/images/c/cb/SMO_Cascade_Moon_2.png'],
    [266, 'Dancing with New Friends', '', 'https://mario.wiki.gallery/images/b/bd/SMO_Sand_Moon_53.png'],
    [268, 'The Treasure Trap Hidden in the Inlet', '', 'https://mario.wiki.gallery/images/7/79/SMO_Seaside_Moon_22.png'],
    [269, 'Vanishing Road Challenge', '', 'https://mario.wiki.gallery/images/1/1d/SMO_Dark_Side_Moon_8.png'],
    [269, 'That Trendy “Pirate” Look', '', 'https://mario.wiki.gallery/images/5/57/SMO_Lake_Moon_29.png'],
    [269, 'Cascade Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/2/2f/SMO_Cascade_Moon_9.png'],
    [269, 'A Swing on Top of a Swing', '', 'https://mario.wiki.gallery/images/c/cc/SMO_Moon_Moon_38.png'], //
    [273, 'Slipping Through the Poison Tide', '', 'https://mario.wiki.gallery/images/9/9d/SMO_Cap_Moon_7.png'],
    [273, 'Jump-Rope Genius (100)', '', 'https://mario.wiki.gallery/images/8/8e/SMO_Metro_Moon_30.png'],
    [273, 'Blowing and Sliding', '', 'https://mario.wiki.gallery/images/d/d3/SMO_Snow_Moon_28.png'], //
    [273, 'Underground Jizo', '', 'https://mario.wiki.gallery/images/b/bc/SMO_Bowser%27s_Moon_25.png'],
    [277, 'Stacked-Up Ice Climb', '', 'https://mario.wiki.gallery/images/f/f1/SMO_Snow_Moon_48.png'],
    [277, 'Magma Swamp: Floating and Sinking', '', 'https://mario.wiki.gallery/images/7/74/SMO_Luncheon_Moon_37.png'],
    [279, 'Hidden Room in the Inverted Pyramid', '', 'https://mario.wiki.gallery/images/b/b3/SMO_Sand_Moon_46.png'], //
    [279, 'Avoiding Fuzzies Inside the Wall', '', 'https://mario.wiki.gallery/images/7/73/SMO_Lost_Moon_6.png'], //
    [281, 'High Over the Crowd', '', 'https://mario.wiki.gallery/images/e/e0/SMO_Metro_Moon_38.png'],
    [282, 'Behind the Floodgate', '', 'https://mario.wiki.gallery/images/5/57/SMO_Lake_Moon_34.png'],
    [282, 'Wooded Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/4/49/SMO_Wooded_Moon_38.png'],
    [282, "A Propeller Pillar's Secret", '', 'https://mario.wiki.gallery/images/6/65/SMO_Lost_Moon_10.png'],
    [285, 'Jizo and the Hidden Room', '', 'https://mario.wiki.gallery/images/6/62/SMO_Bowser%27s_Moon_36.png'],
    [286, 'Slip Through the Nesting Spot', '', 'https://mario.wiki.gallery/images/f/fb/SMO_Seaside_Moon_13.png'],
    [286, 'Secret of the Mural', '', 'https://mario.wiki.gallery/images/c/c7/SMO_Sand_Moon_9.png'],
    [288, 'Behind the Waterfall', '', 'https://mario.wiki.gallery/images/4/4a/SMO_Cascade_Moon_4.png'], //
    [289, 'Hot, Hot, Hot from the Campfire', '', 'https://mario.wiki.gallery/images/9/9b/SMO_Wooded_Moon_64.png'],
    [289, 'Good to See You, Captain Toad!', '', 'https://mario.wiki.gallery/images/6/6e/SMO_Bowser%27s_Moon_28.png'],
    [291, 'Moon Shards in the Forest', '', 'https://mario.wiki.gallery/images/a/a7/SMO_Wooded_Moon_66.png'],
    [291, 'Atop a Blustery Arch', '', 'https://mario.wiki.gallery/images/3/37/SMO_Snow_Moon_9.png'],
    [291, 'An Extreme Simmer', '', 'https://mario.wiki.gallery/images/0/03/SMO_Luncheon_Moon_28.png'],
    [291, 'Caveman Cave-Fan', '', 'https://mario.wiki.gallery/images/2/22/SMO_Cascade_Moon_23.png'],
    [291, 'Nut Hidden in the Fog', '', 'https://mario.wiki.gallery/images/8/83/SMO_Wooded_Moon_42.png'],
    [291, 'Enjoying the View of Forgotten Isle', '', 'https://mario.wiki.gallery/images/5/5e/SMO_Lost_Moon_8.png'],
    [291, 'Piled on the Salt', '', 'https://mario.wiki.gallery/images/1/13/SMO_Luncheon_Moon_6.png'],
    [298, 'Taking Notes: In the Cliffside', '', 'https://mario.wiki.gallery/images/d/df/SMO_Lake_Moon_14.png'],
    [299, 'The Nut Under the Observation Deck', '', 'https://mario.wiki.gallery/images/2/2e/SMO_Wooded_Moon_61.png'],
    [299, 'Scene of Crossing the Poison Swamp', '', 'https://mario.wiki.gallery/images/d/df/SMO_Bowser%27s_Moon_31.png'],
    [299, 'Grow a Flower Garden', '', 'https://mario.wiki.gallery/images/3/31/SMO_Mushroom_Moon_8.png'],
    [299, "Shh! It's a Shortcut!", '', 'https://mario.wiki.gallery/images/d/df/SMO_Seaside_Moon_11.png'],
    [303, 'Hang Your Hat on the Fountain', '', 'https://mario.wiki.gallery/images/0/0e/SMO_Sand_Moon_15.png'],
    [303, 'Taking Notes: Ocean Surface Dash', '', 'https://mario.wiki.gallery/images/a/a8/SMO_Seaside_Moon_31.png'],
    [305, 'Sharpshooting Under Siege', '', 'https://mario.wiki.gallery/images/9/95/SMO_Metro_Moon_42.png'],
    [306, 'Is This an Ingredient Too?!', '', 'https://mario.wiki.gallery/images/3/37/SMO_Luncheon_Moon_9.png'],
    [307, 'Invisible Road: Hidden Room (Wooded)', '', 'https://mario.wiki.gallery/images/3/35/SMO_Wooded_Moon_72.png'],
    [308, 'The Bullet Bill Maze: Side Path', '', 'https://mario.wiki.gallery/images/e/ec/SMO_Sand_Moon_57.png'],
    [308, 'Into the Flowing Sands', '', 'https://mario.wiki.gallery/images/1/1d/SMO_Sand_Moon_72.png'],
    [308, 'Roulette Tower: Climbed', '', 'https://mario.wiki.gallery/images/e/e1/SMO_Ruined_Moon_3.png'],
    [311, 'Love Above the Lava', '', 'https://mario.wiki.gallery/images/8/88/SMO_Luncheon_Moon_24.png'],
    [311, 'Forever Onward, Captain Toad!', '', 'https://mario.wiki.gallery/images/e/ea/SMO_Mushroom_Moon_18.png'],
    [313, 'High, High Above the Clouds', '', 'https://mario.wiki.gallery/images/e/ef/SMO_Cloud_Moon_4.png'],
    [313, "Under the Big One's Brim", '', 'https://mario.wiki.gallery/images/6/65/SMO_Cap_Moon_20.png'],
    [313, 'The Nut That Grew on the Tall Fence', '', 'https://mario.wiki.gallery/images/3/3f/SMO_Wooded_Moon_18.png'],
    [313, 'Top of a Dune', '', 'https://mario.wiki.gallery/images/f/fe/SMO_Sand_Moon_17.png'],
    [313, 'Pops Out of the Tail', '', 'https://mario.wiki.gallery/images/1/1a/SMO_Mushroom_Moon_2.png'],
    [313, 'Under the Ground', '', 'https://mario.wiki.gallery/images/2/2c/SMO_Cascade_Moon_32.png'], //
    [313, "Bowser's Kingdom Timer Challenge 1", '', 'https://mario.wiki.gallery/images/5/59/SMO_Bowser%27s_Moon_17.png'],
    [313, 'Cracked Nut on a Crumbling Tower', '', 'https://mario.wiki.gallery/images/2/2d/SMO_Wooded_Moon_17.png'],
    [313, 'Inside the Stone Cage', '', 'https://mario.wiki.gallery/images/2/22/SMO_Lost_Moon_3.png'],
    [322, 'Love in the Forest Ruins', '', 'https://mario.wiki.gallery/images/c/cc/SMO_Wooded_Moon_21.png'],
    [322, 'The Nut at the Dead End', '', 'https://mario.wiki.gallery/images/3/3e/SMO_Wooded_Moon_16.png'],
    [322, 'Sand Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/3/38/SMO_Sand_Moon_83.png'],
    [322, 'Gobbling Fruit with Yoshi (All 3)', '', 'https://mario.wiki.gallery/images/6/6d/SMO_Mushroom_Moon_13.png'],
    [326, 'Atop a Column in a Row', '', 'https://mario.wiki.gallery/images/4/40/SMO_Luncheon_Moon_10.png'],
    [326, 'Taking Notes: Dive and Swim', '', 'https://mario.wiki.gallery/images/2/28/SMO_Lake_Moon_13.png'],
    [326, 'I Met an Uproot!', '', 'https://mario.wiki.gallery/images/1/19/SMO_Wooded_Moon_70.png'],
    [326, 'Moon Shards in the Jungle', '', 'https://mario.wiki.gallery/images/2/2d/SMO_Lost_Moon_15.png'],
    [330, 'Stretching Your Legs', '', 'https://mario.wiki.gallery/images/0/0f/SMO_Wooded_Moon_25.png'],
    [330, 'Glass Palace Treasure Chest', '', 'https://mario.wiki.gallery/images/f/f2/SMO_Seaside_Moon_21.png'],
    [330, 'Battle in Bubblaine: Rematch', '', 'https://mario.wiki.gallery/images/f/f9/SMO_Mushroom_Moon_36.png'],
    [333, 'Secret Girder Tunnel!', '', 'https://mario.wiki.gallery/images/1/18/SMO_Metro_Moon_13.png'],
    [334, "Small Bird in Bowser's Castle", '', 'https://mario.wiki.gallery/images/b/b2/SMO_Bowser%27s_Moon_50.png'],
    [335, 'Center of the Galaxy', '', 'https://mario.wiki.gallery/images/thumb/c/c5/SMO_Moon_Moon_35.png/192px-SMO_Moon_Moon_35.png'],
    [336, 'Where the Transparent Platforms End', '', 'https://mario.wiki.gallery/images/4/41/SMO_Sand_Moon_84.png'],
    [337, 'Lost in the Tall Trees', '', 'https://mario.wiki.gallery/images/8/80/SMO_Wooded_Moon_56.png'],
    [338, 'Secret 2D Treasure', '', 'https://mario.wiki.gallery/images/5/5e/SMO_Mushroom_Moon_31.png'],
    [339, 'Cascade Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/a/a7/SMO_Cascade_Moon_10.png'],
    [340, 'Secret of the Inverted Mural', '', 'https://mario.wiki.gallery/images/0/0d/SMO_Sand_Moon_10.png'], //
    [341, 'Looking Down on the Goombas', '', 'https://mario.wiki.gallery/images/0/0f/SMO_Wooded_Moon_57.png'],
    [342, 'Crossing to the Magma', '', 'https://mario.wiki.gallery/images/b/b7/SMO_Luncheon_Moon_40.png'],
    [343, 'Taking Notes: Jump on the Palm', '', 'https://mario.wiki.gallery/images/a/ad/SMO_Sand_Moon_32.png'],
    [344, 'Swing Around Secret Flower Field', '', 'https://mario.wiki.gallery/images/2/28/SMO_Wooded_Moon_51.png'],
    [345, 'Treasure in the Spiky Waterway', '', 'https://mario.wiki.gallery/images/0/01/SMO_Lake_Moon_8.png'],
    [345, 'Love by the Seaside', '', 'https://mario.wiki.gallery/images/5/56/SMO_Seaside_Moon_32.png'],
    [345, 'Looking Back in the Dark Waterway', '', 'https://mario.wiki.gallery/images/1/11/SMO_Seaside_Moon_39.png'],
    [348, 'Doctor in the House', '', 'https://mario.wiki.gallery/images/0/05/SMO_Moon_Moon_23.png'],
    [349, 'Big Pot on the Volcano: Dive In!', '', 'https://mario.wiki.gallery/images/c/c1/Big_Pot_on_the_Volcano_Dive_In.png'],
    [350, 'Behind Snowy Mountain', '', 'https://mario.wiki.gallery/images/7/7c/SMO_Snow_Moon_7.png'],
    [351, 'Skimming the Poison Tide', '', 'https://mario.wiki.gallery/images/a/a0/SMO_Cap_Moon_6.png'], //
    [352, 'Beach Volleyball: Hero of the Beach! (100)', '', 'https://mario.wiki.gallery/images/2/28/SMO_Seaside_Moon_38.png'], 
    [353, 'Seaside Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/e/e3/SMO_Seaside_Moon_67.png'],
    [354, 'Wooded Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/7/76/SMO_Wooded_Moon_37.png'],
    [355, 'Pushing Through the Crowd', '', 'https://mario.wiki.gallery/images/b/ba/SMO_Metro_Moon_37.png'], //
    [355, 'Found in the Park! Good Dog!', '', 'https://mario.wiki.gallery/images/c/c3/SMO_Metro_Moon_72.png'],
    [355, 'On Top of the Spinning Tower', '', 'https://mario.wiki.gallery/images/e/eb/SMO_Bowser%27s_Moon_33.png'],
    [355, 'Golden Turnip Recipe 1', '', 'https://mario.wiki.gallery/images/9/97/SMO_Luncheon_Moon_15.png'],
    [359, 'Love by the Lake', '', 'https://mario.wiki.gallery/images/4/43/SMO_Lake_Moon_39.png'],
    [359, 'Inside a Block Is a Hard Place', '', 'https://mario.wiki.gallery/images/5/5e/SMO_Sand_Moon_20.png'],
    [361, 'Poking Your Nose by the Great Gate', '', 'https://mario.wiki.gallery/images/5/5d/SMO_Bowser%27s_Moon_23.png'], //
    [362, 'Fire in the Cave', '', 'https://mario.wiki.gallery/images/f/f9/SMO_Wooded_Moon_19.png'],
    [362, 'Powering Up the Power Plant', '', 'https://mario.wiki.gallery/images/6/65/SMO_Metro_Moon_6.png'],
    [362, 'Captain Toad is Chilly!', '', 'https://mario.wiki.gallery/images/e/e4/SMO_Snow_Moon_19.png'],
    [362, 'Peach in the Seaside Kingdom', '', 'https://mario.wiki.gallery/images/4/4e/SMO_Seaside_Moon_52.png'],
    [366, "On the Statue's Tail", '', 'https://mario.wiki.gallery/images/3/32/SMO_Sand_Moon_14.png'],
    [366, 'Taking Notes: In the Wall Painting', '', 'https://mario.wiki.gallery/images/2/2d/SMO_Sand_Moon_80.png'],
    [368, 'Hidden Room in the Flowing Sands', '', 'https://mario.wiki.gallery/images/a/ae/SMO_Sand_Moon_8.png'],
    [368, 'Aglow in the Jungle', '', 'https://mario.wiki.gallery/images/6/6b/SMO_Lost_Moon_33.png'],
    [368, 'Behind the Big Wall', '', 'https://mario.wiki.gallery/images/6/62/SMO_Bowser%27s_Moon_5.png'],
    [371, 'Island of Salt Floating in the Lava', '', 'https://mario.wiki.gallery/images/d/df/SMO_Luncheon_Moon_12.png'],
    [372, "You're Quite a Catch, Captain Toad!", '', 'https://mario.wiki.gallery/images/7/7c/SMO_Sand_Moon_37.png'],
    [372, 'Peach in the Moon Kingdom', '', 'https://mario.wiki.gallery/images/5/57/SMO_Moon_Moon_26.png'],
    [374, 'Lost Kingdom Timer Challenge', '', 'https://mario.wiki.gallery/images/0/08/SMO_Lost_Moon_31.png'],
    [374, "The Broodals Are After Some Cookin'", '', 'https://mario.wiki.gallery/images/e/e2/TheBroodalsAreAfterSomeCookin.png'],
    [374, 'Poke the Wooden Tower', '', 'https://mario.wiki.gallery/images/8/87/SMO_Bowser%27s_Moon_62.png'],
    [377, 'Found with Dark Side Art 5', '', 'https://mario.wiki.gallery/images/9/9c/SMO_Dark_Side_Moon_19.png'],
    [378, 'Moon Shards in the Lake', '', 'https://mario.wiki.gallery/images/3/33/SMO_Lake_Moon_12.png'],
    [378, 'Mario Picture Match', '', 'https://mario.wiki.gallery/images/5/5a/SMO_Mushroom_Moon_24.png'],
    [380, 'Jaxi Driver', '', 'https://mario.wiki.gallery/images/0/0b/SMO_Sand_Moon_58.png'],
    [380, 'Bird Traveling the Forest', '', 'https://mario.wiki.gallery/images/e/e1/SMO_Wooded_Moon_62.png'],
    [380, 'Taking Notes: On Top of the Wall', '', 'https://mario.wiki.gallery/images/6/6b/SMO_Wooded_Moon_67.png'],
    [383, 'Golden Turnip Recipe 3', '', 'https://mario.wiki.gallery/images/c/c4/SMO_Luncheon_Moon_17.png'],
    [383, 'Fruit Feast Under Siege (Both)', '', 'https://mario.wiki.gallery/images/6/68/SMO_Dark_Side_Moon_10.png'],
    [385, 'Next to Glasses Bridge', '', 'https://mario.wiki.gallery/images/9/9e/SMO_Cap_Moon_18.png'],
    [385, 'Next to the Stone Arch', '', 'https://mario.wiki.gallery/images/7/75/SMO_Cascade_Moon_29.png'],
    [385, 'Bird Traveling the Wastes', '', 'https://mario.wiki.gallery/images/4/4d/SMO_Sand_Moon_22.png'],
    [385, 'Bird Traveling Over the Ocean', '', 'https://mario.wiki.gallery/images/7/70/SMO_Seaside_Moon_62.png'],
    [385, 'Struggle in Steam Gardens: Rematch', '', 'https://mario.wiki.gallery/images/4/48/SMO_Mushroom_Moon_34.png'],
    [390, 'Secret Path to Bubblaine!', '', 'https://mario.wiki.gallery/images/f/f2/SMO_Seaside_Moon_49.png'],
    [391, "One Man's Trash...", '', 'https://mario.wiki.gallery/images/e/e1/SMO_Metro_Moon_48.png'],
    [392, "Sphynx's Treasure Vault", '', 'https://mario.wiki.gallery/images/9/96/SMO_Sand_Moon_51.png'],
    [392, 'Girder Sandwich', '', 'https://mario.wiki.gallery/images/0/08/SMO_Metro_Moon_10.png'], //
    [392, 'Luncheon Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/e/eb/SMO_Luncheon_Moon_19.png'],
    [395, 'Rooftop of the Water Plaza', '', 'https://mario.wiki.gallery/images/0/0c/SMO_Lake_Moon_37.png'],
    [395, 'Corner of the Magma Swamp', '', 'https://mario.wiki.gallery/images/8/81/SMO_Luncheon_Moon_38.png'],
    [397, 'Light the Lantern on the Small Island', '', 'https://mario.wiki.gallery/images/5/52/SMO_Luncheon_Moon_14.png'],
    [397, 'Taking Notes: Between Spinies', '', 'https://mario.wiki.gallery/images/c/c2/SMO_Bowser%27s_Moon_18.png'],
    [399, 'Sunken Star in the Sea of Clouds', '', 'https://mario.wiki.gallery/images/e/e4/SMO_Mushroom_Moon_30.png'], //
    [399, 'Found with Dark Side Art 6', '', 'https://mario.wiki.gallery/images/7/7f/SMO_Dark_Side_Moon_20.png'],
    [401, 'Walking the Desert!', '', 'https://mario.wiki.gallery/images/e/e2/SMO_Sand_Moon_82.png'],
    [401, 'Peach in the Metro Kingdom', '', 'https://mario.wiki.gallery/images/a/a7/SMO_Metro_Moon_66.png'],
    [403, 'Herding Sheep on the Iron Bridge', '', 'https://mario.wiki.gallery/images/7/77/SMO_Wooded_Moon_74.png'],
    [403, 'Found with Dark Side Art 1', '', 'https://mario.wiki.gallery/images/c/cb/SMO_Dark_Side_Moon_15.png'],
    [405, 'That “Old West” Style', '', 'https://mario.wiki.gallery/images/c/cc/SMO_Lake_Moon_31.png'],
    [405, 'From Inside a Bright Stone', '', 'https://mario.wiki.gallery/images/9/9b/SMO_Luncheon_Moon_57.png'],
    [407, 'Stone Wall Circuit', '', 'https://mario.wiki.gallery/images/8/8c/SMO_Bowser%27s_Moon_57.png'],
    [408, 'Behind the Rock Wall', '', 'https://mario.wiki.gallery/images/d/d9/SMO_Wooded_Moon_5.png'],
    [408, 'Peeking Out from Under the Bridge', '', 'https://mario.wiki.gallery/images/f/f0/SMO_Lost_Moon_16.png'],
    [410, 'Edge of the Galaxy', '', 'https://mario.wiki.gallery/images/1/1c/SMO_Moon_Moon_36.png'],
    [411, 'Above a High Cliff', '', 'https://mario.wiki.gallery/images/6/64/SMO_Cascade_Moon_7.png'],
    [412, 'Jumping High as a Frog', '', 'https://mario.wiki.gallery/images/9/90/SMO_Moon_Moon_30.png'],
    [413, 'Inside the Rising Stone Pillar', '', 'https://mario.wiki.gallery/images/d/db/SMO_Lost_Moon_7.png'],
    [414, 'Danger Sign', '', 'https://mario.wiki.gallery/images/f/f6/SMO_Cap_Moon_19.png'],
    [414, 'The Nut in the Robot Storeroom', '', 'https://mario.wiki.gallery/images/8/81/SMO_Wooded_Moon_59.png'],
    [416, 'A Treasure Made from Coins', '', 'https://mario.wiki.gallery/images/c/ce/SMO_Wooded_Moon_33.png'],
    [416, 'High Up in the Cave', '', 'https://mario.wiki.gallery/images/0/05/SMO_Wooded_Moon_55.png'],
    [418, 'Extremely Hot Bath', '', 'https://mario.wiki.gallery/images/9/98/SMO_Lost_Moon_35.png'],
    [419, 'Above the Poison Swamp', '', 'https://mario.wiki.gallery/images/3/32/SMO_Bowser%27s_Moon_10.png'],
    [420, 'The Rooftop Lantern', '', 'https://mario.wiki.gallery/images/d/da/SMO_Luncheon_Moon_50.png'],
    [421, 'Love in the Heart of the Desert', '', 'https://mario.wiki.gallery/images/a/a6/SMO_Sand_Moon_35.png'],
    [421, 'Treasure Under the Cliff', '', 'https://mario.wiki.gallery/images/2/22/SMO_Cascade_Moon_28.png'],
    [421, 'Dorrie-Back Rider', '', 'https://mario.wiki.gallery/images/c/c6/SMO_Lake_Moon_2.png'],
    [421, 'Through the Freezing Waterway', '', 'https://mario.wiki.gallery/images/d/dd/SMO_Sand_Moon_88.png'],
    [421, "A Butterfly's Treasure", '', 'https://mario.wiki.gallery/images/f/f0/SMO_Lost_Moon_12.png'],
    [426, 'Push-Block Peril', '', 'https://mario.wiki.gallery/images/c/cd/SMO_Cap_Moon_8.png'],
    [427, 'On the North Pillar', '', 'https://mario.wiki.gallery/images/d/dc/SMO_Sand_Moon_71.png'],
    [427, 'Caught on a Big Horn', '', 'https://mario.wiki.gallery/images/0/02/SMO_Ruined_Moon_6.png'],
    [429, 'Bird Traveling in the Fog', '', 'https://mario.wiki.gallery/images/thumb/5/51/SMO_Cap_Moon_25.png/192px-SMO_Cap_Moon_25.png'],
    [430, 'Sewer Treasure', '', 'https://mario.wiki.gallery/images/4/4c/SMO_Metro_Moon_35.png'],
    [431, 'The Tip of the White Spire', '', 'https://mario.wiki.gallery/images/d/d6/SMO_Moon_Moon_3.png'],
    [432, 'Around the Barrier Wall', '', 'https://mario.wiki.gallery/images/2/2c/SMO_Moon_Moon_11.png'],
    [432, 'The Icicle Barrier', '', 'https://mario.wiki.gallery/images/b/b5/SMO_Snow_Moon_1.png'],
    [432, 'Lake Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/9/93/SMO_Lake_Moon_10.png'],
    [432, 'Love at the Edge of the Desert', '', 'https://mario.wiki.gallery/images/e/ec/SMO_Sand_Moon_81.png'],
    [432, 'Fruit Feast in the Magma Swamp!', '', 'https://mario.wiki.gallery/images/3/3d/SMO_Dark_Side_Moon_12.png'],
    [432, 'By the Cannon Pointed the Big Pot', '', 'https://mario.wiki.gallery/images/6/61/SMO_Luncheon_Moon_61.png'],
    [432, 'Luncheon Kingdom Slots', '', 'https://mario.wiki.gallery/images/0/04/SMO_Luncheon_Moon_26.png'],
    [439, 'Outside the Rotating Maze', '', 'https://mario.wiki.gallery/images/6/6a/SMO_Metro_Moon_44.png'],
    [440, 'Frog-Jumping Above the Fog', '', 'https://mario.wiki.gallery/images/e/e4/SMO_Cap_Moon_1.png'],
    [440, "Herding Sheep at Peach's Castle", '', 'https://mario.wiki.gallery/images/6/68/SMO_Mushroom_Moon_12.png'],
    [440, 'Charging Through an Army', '', 'https://mario.wiki.gallery/images/6/69/SMO_Ruined_Moon_9.png'],
    [440, 'Found with Dark Side Art 7', '', 'https://mario.wiki.gallery/images/e/e9/SMO_Dark_Side_Moon_21.png'],
    [440, 'Treasure Inside the Turret', '', 'https://mario.wiki.gallery/images/5/51/SMO_Bowser%27s_Moon_6.png'],
    [445, 'Bird Traveling in the City', '', 'https://mario.wiki.gallery/images/7/7f/SMO_Metro_Moon_54.png'],
    [445, 'It Popped Out of the Ice', '', 'https://mario.wiki.gallery/images/e/e5/SMO_Snow_Moon_43.png'],
    [445, 'Found with Seaside Kingdom Art', '', 'https://mario.wiki.gallery/images/4/4d/SMO_Seaside_Moon_50.png'],
    [448, 'Peach in the Sand Kingdom', '', 'https://mario.wiki.gallery/images/3/35/SMO_Sand_Moon_69.png'],
    [449, 'The Ice Wall Barrier', '', 'https://mario.wiki.gallery/images/4/41/SMO_Snow_Moon_2.png'],
    [449, 'A Tourist in the Mushroom Kingdom!', '', 'https://mario.wiki.gallery/images/e/e2/SMO_Mushroom_Moon_40.png'],
    [451, 'Jump Down to the Top of a Tree', '', 'https://mario.wiki.gallery/images/2/28/SMO_Lost_Moon_27.png'],
    [451, 'A Rumble on the Seaside Floor', '', 'https://mario.wiki.gallery/images/9/9e/SMO_Seaside_Moon_41.png'],
    [451, 'I Met a Lake Cheep Cheep!', '', 'https://mario.wiki.gallery/images/3/30/SMO_Lake_Moon_16.png'],
    [451, 'Secret Path to New Donk City!', '', 'https://mario.wiki.gallery/images/4/46/SMO_Metro_Moon_51.png'],
    [451, 'Metro Kingdom Timer Challenge 3', '', 'https://mario.wiki.gallery/images/e/e6/SMO_Metro_Moon_71.png'], //
    [456, 'Exploring for Treasure', '', 'https://mario.wiki.gallery/images/9/99/SMO_Wooded_Moon_36.png'],
    [456, 'Upon the Broken Arch', '', 'https://mario.wiki.gallery/images/e/e8/SMO_Ruined_Moon_7.png'],
    [456, 'Taking Notes in the Sea', '', 'https://mario.wiki.gallery/images/c/c8/SMO_Seaside_Moon_66.png'],
    [456, 'Caught on the Giant Horn', '', 'https://mario.wiki.gallery/images/8/89/SMO_Bowser%27s_Moon_48.png'],
    [460, "Lurking in the Pillar's Shadow", '', 'https://mario.wiki.gallery/images/b/ba/SMO_Luncheon_Moon_7.png'],
    [460, 'On Top of the Cannon', '', 'https://mario.wiki.gallery/images/c/c8/SMO_Moon_Moon_12.png'],
    [462, 'Jaxi Stunt Driving', '', 'https://mario.wiki.gallery/images/a/ad/SMO_Sand_Moon_59.png'],
    [463, 'Broodals Over the Lake', '', 'https://mario.wiki.gallery/images/c/cf/SMO_Lake_Moon_1.png'],
    [463, "Sphynx's Hidden Vault", '', 'https://mario.wiki.gallery/images/3/3a/SMO_Moon_Moon_24.png'],
    [465, 'The Nut in the Red Maze', '', 'https://mario.wiki.gallery/images/7/73/SMO_Wooded_Moon_15.png'],
    [466, 'Goomba Tower Assembly', '', 'https://mario.wiki.gallery/images/0/0b/SMO_Sand_Moon_48.png'],
    [466, 'Vanishing Road Rush', '', 'https://mario.wiki.gallery/images/6/63/SMO_Dark_Side_Moon_7.png'],
    [468, 'Taking Notes: Running Down', '', 'https://mario.wiki.gallery/images/4/4e/SMO_Sand_Moon_79.png'],
    [468, 'Treasure in the Ice Wall', '', 'https://mario.wiki.gallery/images/d/d8/SMO_Snow_Moon_12.png'],
    [470, 'Taking Notes: Stretching', '', 'https://mario.wiki.gallery/images/4/49/SMO_Wooded_Moon_68.png'],
    [470, 'A Tourist in the Metro Kingdom!', '', 'https://mario.wiki.gallery/images/7/72/SMO_Metro_Moon_52.png'],
    [470, "Caught Hopping at Peach's Castle!", '', 'https://mario.wiki.gallery/images/1/19/SMO_Mushroom_Moon_3.png'],
    [473, "Taking Notes: On the Moon's Surface", '', 'https://mario.wiki.gallery/images/d/db/SMO_Moon_Moon_8.png'],
    [473, 'Found with Mushroom Kingdom Art', '', 'https://mario.wiki.gallery/images/d/de/SMO_Mushroom_Moon_41.png'],
    [475, 'Inside an Iron Girder', '', 'https://mario.wiki.gallery/images/7/74/SMO_Metro_Moon_8.png'],
    [475, 'Hurry and Stretch', '', 'https://mario.wiki.gallery/images/9/93/SMO_Seaside_Moon_47.png'],
    [477, 'Secret Path to Lake Lamode!', '', 'https://mario.wiki.gallery/images/e/ef/SMO_Lake_Moon_26.png'],
    [478, 'Found in the Sand! Good Dog!', '', 'https://mario.wiki.gallery/images/f/f2/SMO_Sand_Moon_31.png'],
    [478, 'Herding Sheep Above the Forest Fog', '', 'https://mario.wiki.gallery/images/7/72/SMO_Wooded_Moon_73.png'],
    [480, 'Found with Cap Kingdom Art', '', 'https://mario.wiki.gallery/images/5/5d/SMO_Cap_Moon_17.png'],
    [480, 'A Fine Detail on the Glass', '', 'https://mario.wiki.gallery/images/7/70/SMO_Seaside_Moon_55.png'],
    [480, 'Cliffside Treasure Chest', '', 'https://mario.wiki.gallery/images/4/41/SMO_Moon_Moon_6.png'],
    [483, 'Caught on the Iron Fence', '', 'https://mario.wiki.gallery/images/a/a8/SMO_Bowser%27s_Moon_12.png'],
    [484, 'Path to the Secret Flower Field', '', 'https://mario.wiki.gallery/images/b/bb/SMO_Wooded_Moon_3.png'],
    [484, 'Hat-and-Seek: Among the Food', '', 'https://mario.wiki.gallery/images/4/49/SMO_Luncheon_Moon_54.png'],
    [486, 'The Treasure Chest in the Veggies', '', 'https://mario.wiki.gallery/images/5/5f/SMO_Luncheon_Moon_34.png'],
    [487, 'Secret Path to Shiveria!', '', 'https://mario.wiki.gallery/images/f/fa/SMO_Snow_Moon_33.png'],
    [487, "Bowser's Castle Treasure Vault", '', 'https://mario.wiki.gallery/images/f/fd/SMO_Bowser%27s_Moon_30.png'],
    [489, 'A Tourist in the Cascade Kingdom', '', 'https://mario.wiki.gallery/images/7/7b/SMO_Cascade_Moon_19.png'],
    [490, 'Snow Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/f/fe/SMO_Snow_Moon_14.png'],
    [491, "Fishing(?) in Bowser's Castle", '', 'https://mario.wiki.gallery/images/4/41/SMO_Bowser%27s_Moon_27.png'],
    [491, 'Fruit Feast on the Sinking Island', '', 'https://mario.wiki.gallery/images/3/3d/SMO_Dark_Side_Moon_12.png'],
    [493, 'The Shining Fruit', '', 'https://mario.wiki.gallery/images/c/ce/SMO_Lost_Moon_26.png'],
    [493, 'On Top of a Tall, Tall Roof', '', 'https://mario.wiki.gallery/images/a/aa/SMO_Luncheon_Moon_59.png'],
    [495, 'Flower Road Run', '', 'https://mario.wiki.gallery/images/1/1f/SMO_Wooded_Moon_43.png'],
    [495, 'Moon Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/3/37/SMO_Moon_Moon_7.png'],
    [495, 'Mushroom Kingdom Koopa Freerunning', '', 'https://mario.wiki.gallery/images/d/d0/SMO_Mushroom_Moon_21.png'],
    [498, 'Shining in the Snow in Town', '', 'https://mario.wiki.gallery/images/1/17/SMO_Snow_Moon_8.png'],
    [499, "Jammin' in the Metro Kingdom", '', 'https://mario.wiki.gallery/images/a/ae/SMO_Metro_Moon_58.png'],
    [500, 'Bird Traveling the Desert', '', 'https://mario.wiki.gallery/images/1/10/SMO_Sand_Moon_21.png'],
    [500, 'Sand Quiz: Wonderful!', '', 'https://mario.wiki.gallery/images/6/6f/SMO_Sand_Moon_41.png'],
    [502, 'Cap Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/a/a1/SMO_Cap_Moon_3.png'],
    [503, 'Peach in the Lake Kingdom', '', 'https://mario.wiki.gallery/images/9/9a/SMO_Lake_Moon_33.png'],
    [503, 'Road to Sky Garden', '', 'https://mario.wiki.gallery/images/0/02/SMO_Wooded_Moon_1.png'],
    [505, 'A Light Next to the Lighthouse', '', 'https://mario.wiki.gallery/images/e/e0/SMO_Seaside_Moon_59.png'],
    [506, 'Peach in the Cap Kingdom', '', 'https://mario.wiki.gallery/images/e/e1/SMO_Cap_Moon_16.png'],
    [507, 'Luncheon Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/9/9c/SMO_Luncheon_Moon_18.png'],
    [508, 'Caught Hopping Near the Ship!', '', 'https://mario.wiki.gallery/images/2/29/SMO_Cap_Moon_26.png'],
    [508, 'Nut Planted in the Tower', '', 'https://mario.wiki.gallery/images/e/ef/SMO_Wooded_Moon_24.png'],
    [510, 'Secret Path to Fossil Falls!', '', 'https://mario.wiki.gallery/images/5/51/SMO_Cascade_Moon_18.png'],
    [510, 'From a Crate in the Ruins', '', 'https://mario.wiki.gallery/images/0/06/SMO_Sand_Moon_12.png'],
    [510, 'Jumping from Flag to Flag', '', 'https://mario.wiki.gallery/images/3/33/SMO_Bowser%27s_Moon_52.png'],
    [513, 'Deep Woods Treasure Trap', '', 'https://mario.wiki.gallery/images/7/77/SMO_Wooded_Moon_35.png'],
    [514, 'Perched on the Castle Roof', '', 'https://mario.wiki.gallery/images/e/e0/SMO_Mushroom_Moon_1.png'],
    [515, 'Moon Shards in the Cold Room', '', 'https://mario.wiki.gallery/images/6/68/SMO_Snow_Moon_29.png'],
    [515, 'Mushroom Kingdom Timer Challenge', '', 'https://mario.wiki.gallery/images/2/2a/SMO_Mushroom_Moon_9.png'],
    [517, 'A Relaxing Dance', '', 'https://mario.wiki.gallery/images/c/c9/SMO_Seaside_Moon_42.png'],
    [518, 'Fog-Shrouded Platform', '', 'https://mario.wiki.gallery/images/3/32/SMO_Cap_Moon_24.png'],
    [518, 'Where the Birds Gather', '', 'https://mario.wiki.gallery/images/f/f3/SMO_Sand_Moon_16.png'],
    [520, 'The Gusty Barrier', '', 'https://mario.wiki.gallery/images/7/7d/SMO_Snow_Moon_3.png'],
    [521, "Under the Mummy's Curse", '', 'https://mario.wiki.gallery/images/7/7b/SMO_Sand_Moon_49.png'],
    [522, 'Freezing Waterway: Hidden Room', '', 'https://mario.wiki.gallery/images/6/6a/SMO_Sand_Moon_89.png'],
    [522, 'Looking Back on the Flower Road', '', 'https://mario.wiki.gallery/images/3/3a/SMO_Snow_Moon_55.png'],
    [524, 'Found with Sand Kingdom Art', '', 'https://mario.wiki.gallery/images/e/ed/SMO_Sand_Moon_63.png'],
    [524, 'Dinosaur Nest: Big Cleanup!', '', 'https://mario.wiki.gallery/images/3/35/SMO_Cascade_Moon_12.png'],
    [524, 'Walking on Ice!', '', 'https://mario.wiki.gallery/images/1/10/SMO_Snow_Moon_50.png'],
    [524, 'Freezing Water Near the Ceiling', '', 'https://mario.wiki.gallery/images/7/7d/SMO_Snow_Moon_27.png'],
    [528, 'Wooded Kingdom Timer Challenge 3', '', 'https://mario.wiki.gallery/images/a/ac/SMO_Wooded_Moon_65.png'],
    [528, "The Nut 'Round the Corner", '', 'https://mario.wiki.gallery/images/3/35/SMO_Wooded_Moon_13.png'],
    [530, 'In the Skies Above the Canyon', '', 'https://mario.wiki.gallery/images/7/75/SMO_Sand_Moon_73.png'],
    [530, 'Bonjour, Dorrie!', '', 'https://mario.wiki.gallery/images/3/32/SMO_Seaside_Moon_15.png'],
    [530, 'Found with Moon Kingdom Art', '', 'https://mario.wiki.gallery/images/7/76/SMO_Moon_Moon_27.png'], //
    [533, 'Climb Up the Cascading Magma', '', 'https://mario.wiki.gallery/images/2/22/ClimbUptheCascadingMagma.png'],
    [533, 'Center of Hexagon Tower', '', 'https://mario.wiki.gallery/images/f/fe/SMO_Bowser%27s_Moon_60.png'],
    [535, 'Peach in the Ruined Kingdom', '', 'https://mario.wiki.gallery/images/8/81/SMO_Ruined_Moon_5.png'],
    [536, "Jammin' in the Wooded Kingdom", '', 'https://mario.wiki.gallery/images/c/cb/SMO_Wooded_Moon_52.png'],
    [536, 'What Shines Inside the Glass', '', 'https://mario.wiki.gallery/images/f/f3/SMO_Seaside_Moon_54.png'],
    [538, 'Peach in the Luncheon Kingdom', '', 'https://mario.wiki.gallery/images/c/c8/SMO_Luncheon_Moon_56.png'],
    [538, 'Moon Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/5/5b/SMO_Moon_Moon_31.png'],
    [540, 'High-Flying Leap', '', 'https://mario.wiki.gallery/images/e/ee/SMO_Lake_Moon_35.png'],
    [540, 'Treasure Beneath the Cheese Rocks', '', 'https://mario.wiki.gallery/images/9/95/SMO_Luncheon_Moon_30.png'], //
    [542, 'Peach in the Snow Kingdom', '', 'https://mario.wiki.gallery/images/8/89/SMO_Snow_Moon_37.png'],
    [542, "Jammin' in the Mushroom Kingdom", '', 'https://mario.wiki.gallery/images/c/c5/SMO_Mushroom_Moon_19.png'],
    [544, 'Elevator Escalation', '', 'https://mario.wiki.gallery/images/2/24/SMO_Wooded_Moon_45.png'],
    [544, 'Under the Meat Plateau', '', 'https://mario.wiki.gallery/images/2/2e/SMO_Luncheon_Moon_58.png'],
    [546, 'Rolling Rock in the Deep Woods', '', 'https://mario.wiki.gallery/images/8/8e/SMO_Wooded_Moon_28.png'],
    [546, 'Caught Hopping in the Jungle!', '', 'https://mario.wiki.gallery/images/2/2f/SMO_Lost_Moon_13.png'],
    [546, 'Found with Dark Side Art 3', '', 'https://mario.wiki.gallery/images/c/c3/SMO_Dark_Side_Moon_17.png'],
    [549, 'On a Tree in the Swamp', '', 'https://mario.wiki.gallery/images/2/24/SMO_Lost_Moon_4.png'],
    [550, 'Fly to the Edge of the Fog', '', 'https://mario.wiki.gallery/images/b/b0/SMO_Cap_Moon_21.png'],
    [551, 'Blowup at Mount Volbono: Rematch', '', 'https://mario.wiki.gallery/images/6/66/SMO_Mushroom_Moon_37.png'],
    [552, 'On the Mountain Road', '', 'https://mario.wiki.gallery/images/a/af/SMO_Lost_Moon_9.png'],
    [553, "Jammin' in the Luncheon Kingdom", '', 'https://mario.wiki.gallery/images/f/f8/SMO_Luncheon_Moon_51.png'],
    [554, 'Mechanic: Repairs Complete!', '', 'https://mario.wiki.gallery/images/1/10/SMO_Luncheon_Moon_52.png'],
    [555, 'Moon Shards in the Sea', '', 'https://mario.wiki.gallery/images/c/c5/SMO_Seaside_Moon_30.png'],
    [556, 'Found with Dark Side Art 9', '', 'https://mario.wiki.gallery/images/f/f5/SMO_Dark_Side_Moon_23.png'],
    [557, 'Hat-and-Seek: In the City', '', 'https://mario.wiki.gallery/images/9/97/SMO_Metro_Moon_62.png'],
    [557, 'Caught Hopping in the Forest!', '', 'https://mario.wiki.gallery/images/f/f0/SMO_Wooded_Moon_8.png'],
    [557, 'Glowing in the Deep Woods', '', 'https://mario.wiki.gallery/images/1/12/SMO_Wooded_Moon_29.png'],
    [557, 'Beach Volleyball: Champ (30)', '', 'https://mario.wiki.gallery/images/1/1c/SMO_Seaside_Moon_37.png'],
    [557, 'Poking Your Nose in the Plaster Wall', '', 'https://mario.wiki.gallery/images/8/81/SMO_Bowser%27s_Moon_21.png'],
    [557, 'The Spinning Maze: Open!', '', 'https://mario.wiki.gallery/images/a/ac/SMO_Seaside_Moon_71.png'],
    [563, 'Swinging Scaffolding: Break!', '', 'https://mario.wiki.gallery/images/c/c7/SMO_Metro_Moon_79.png'],
    [563, 'Inside a Block in the Castle', '', 'https://mario.wiki.gallery/images/3/33/SMO_Bowser%27s_Moon_14.png'],
    [563, 'City Gardening: Rooftop Planter', '', 'https://mario.wiki.gallery/images/6/69/SMO_Metro_Moon_23.png'],
    [563, "Yoshi's Feast in the Sea of Clouds", '', 'https://mario.wiki.gallery/images/8/8f/SMO_Mushroom_Moon_29.png'],
    [563, 'Jump-Rope Hero (30)', '', 'https://mario.wiki.gallery/images/5/57/SMO_Metro_Moon_29.png'],
    [568, 'Aim! Poke!', '', 'https://mario.wiki.gallery/images/c/c3/SMO_Seaside_Moon_68.png'],
    [569, 'Peach in the Wooded Kingdom', '', 'https://mario.wiki.gallery/images/9/96/SMO_Wooded_Moon_54.png'],
    [570, 'Over the Fuzzies, Above the Swamp', '', 'https://mario.wiki.gallery/images/7/78/SMO_Lost_Moon_5.png'],
    [570, 'Bullet Bill Breakthrough', '', 'https://mario.wiki.gallery/images/8/8b/SMO_Sand_Moon_19.png'],
    [570, 'An Invisible Gleam', '', 'https://mario.wiki.gallery/images/4/42/SMO_Sand_Moon_75.png'],
    [570, 'Sunken Treasure in the Moat', '', 'https://mario.wiki.gallery/images/6/60/SMO_Bowser%27s_Moon_8.png'],
    [574, 'Sphynx Traveling to the Waterfall', '', 'https://mario.wiki.gallery/images/a/a3/SMO_Cascade_Moon_25.png'],
    [574, 'Navigating Giant Swings', '', 'https://mario.wiki.gallery/images/a/aa/SMO_Moon_Moon_37.png'],
    [576, 'Cap Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/e/e7/SMO_Cap_Moon_28.png'],
    [577, 'Spinning Above the Clouds', '', 'https://mario.wiki.gallery/images/4/41/SMO_Snow_Moon_31.png'], //
    [577, 'A Rumble Under the Arena Floor', '', 'https://mario.wiki.gallery/images/5/55/SMO_Bowser%27s_Moon_42.png'],
    [577, "Found at Peach's Castle! Good Dog!", '', 'https://mario.wiki.gallery/images/5/5d/SMO_Mushroom_Moon_10.png'],
    [580, 'Moon Shards in the Snow', '', 'https://mario.wiki.gallery/images/4/4b/SMO_Snow_Moon_15.png'],
    [580, 'Seaside Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/2/27/SMO_Seaside_Moon_27.png'],
    [582, 'Ocean-Bottom Maze: Hidden Room', '', 'https://mario.wiki.gallery/images/f/fc/SMO_Seaside_Moon_9.png'],
    [583, 'From Crates in the Moat', '', 'https://mario.wiki.gallery/images/1/15/SMO_Bowser%27s_Moon_47.png'],
    [583, 'Flower Thieves of Sky Garden', '', 'https://mario.wiki.gallery/images/7/7b/SMO_Wooded_Moon_2.png'],
    [583, 'Rumble in Crumbleden: Rematch', '', 'https://mario.wiki.gallery/images/c/c4/SMO_Ruined_Dragon_Rematch_Streams_Attack.png'],
    [586, 'Taking Notes: Ocean-Bottom Maze', '', 'https://mario.wiki.gallery/images/d/d2/SMO_Seaside_Moon_65.png'],
    [587, 'The Lighthouse Seal', '', 'https://mario.wiki.gallery/images/9/98/SMO_Seaside_Moon_2.png'], //
    [587, 'Taxi Flying Through Lake Lamode', '', 'https://mario.wiki.gallery/images/c/c4/SMO_Lake_Moon_28.png'],
    [587, 'Seaside Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/7/75/SMO_Seaside_Moon_28.png'],
    [590, 'Secret Path to Tostarena!', '', 'https://mario.wiki.gallery/images/3/37/SMO_Sand_Moon_62.png'],
    [591, 'In the Ancient Treasure Chest', '', 'https://mario.wiki.gallery/images/7/79/SMO_Ruined_Moon_2.png'],
    [592, 'Frog-Jumping from the Top Deck', '', 'https://mario.wiki.gallery/images/6/6d/SMO_Cap_Moon_2.png'],
    [592, 'On the Lakeshore', '', 'https://mario.wiki.gallery/images/e/e3/SMO_Lake_Moon_6.png'],
    [592, 'Found with Dark Side Art 8', '', 'https://mario.wiki.gallery/images/e/ef/SMO_Dark_Side_Moon_22.png'],
    [592, "The Sphynx's Underwater Vault", '', 'https://mario.wiki.gallery/images/5/54/SMO_Seaside_Moon_40.png'],
    [596, 'Hat-and-Seek in the Snow', '', 'https://mario.wiki.gallery/images/a/af/SMO_Snow_Moon_36.png'],
    [596, "Peach in Bowser's Kingdom", '', 'https://mario.wiki.gallery/images/3/39/SMO_Bowser%27s_Moon_44.png'],
    [598, "Below the Cliff's Edge", '', 'https://mario.wiki.gallery/images/1/19/SMO_Lost_Moon_2.png'],
    [599, 'Underwater Highway Tunnel', '', 'https://mario.wiki.gallery/images/7/78/SMO_Seaside_Moon_10.png'],
    [600, 'Sand Kingdom Slots', '', 'https://mario.wiki.gallery/images/2/23/SMO_Sand_Moon_44.png'],
    [600, 'The Lurker Under the Stone', '', 'https://mario.wiki.gallery/images/0/0d/SMO_Sand_Moon_23.png'],
    [600, 'Digging in the… Cloud?', '', 'https://mario.wiki.gallery/images/f/f5/SMO_Cloud_Moon_3.png'],
    [600, 'Stack Up Above the Wall', '', 'https://mario.wiki.gallery/images/c/ce/SMO_Bowser%27s_Moon_19.png'],
    [604, 'Space Is “In” Right Now', '', 'https://mario.wiki.gallery/images/1/10/SMO_Lake_Moon_30.png'],
    [604, 'Shining on High', '', 'https://mario.wiki.gallery/images/5/54/SMO_Snow_Moon_38.png'],
    [606, 'Taxi Flying Through Forgotten Isle', '', 'https://mario.wiki.gallery/images/f/fc/SMO_Lost_Moon_22.png'],
    [606, 'Desert Gardening: Plaza Seed', '', 'https://mario.wiki.gallery/images/b/b2/SMO_Sand_Moon_25.png'],
    [606, 'Found on the Beach! Good Dog!', '', 'https://mario.wiki.gallery/images/f/fd/SMO_Seaside_Moon_29.png'],
    [609, 'Taking Notes: In the Fog', '', 'https://mario.wiki.gallery/images/e/e2/SMO_Cap_Moon_27.png'],
    [609, 'Found with Dark Side Art 4', '', 'https://mario.wiki.gallery/images/f/f7/SMO_Dark_Side_Moon_18.png'],
    [611, 'Dust-Up in New Donk City: Rematch', '', 'https://mario.wiki.gallery/images/6/67/SMO_Mushroom_Moon_35.png'],
    [611, 'Slip Behind the Ice', '', 'https://mario.wiki.gallery/images/6/63/SMO_Snow_Moon_30.png'],
    [613, 'On the Leaning Pillar', '', 'https://mario.wiki.gallery/images/2/2c/SMO_Sand_Moon_7.png'],
    [613, 'Found with Lake Kingdom Art', '', 'https://mario.wiki.gallery/images/6/6a/SMO_Lake_Moon_27.png'],
    [613, 'Moon Quiz: Amazing!', '', 'https://mario.wiki.gallery/images/c/c0/SMO_Moon_Moon_18.png'],
    [616, 'Climb the Cheese Rocks', '', 'https://mario.wiki.gallery/images/5/56/SMO_Luncheon_Moon_44.png'],
    [617, 'High Up on a Rock Wall', '', 'https://mario.wiki.gallery/images/6/6d/SMO_Wooded_Moon_58.png'],
    [617, 'Found with Luncheon Kingdom Art', '', 'https://mario.wiki.gallery/images/5/55/SMO_Luncheon_Moon_49.png'], //
    [617, 'Goomba Picture Match', '', 'https://mario.wiki.gallery/images/f/f7/SMO_Cloud_Moon_7.png'],
    [620, 'Seaside Kingdom Timer Challenge 3', '', 'https://mario.wiki.gallery/images/0/0c/SMO_Seaside_Moon_64.png'],
    [620, "Secret Path to Bowser's Castle!", '', 'https://mario.wiki.gallery/images/a/ab/SMO_Bowser%27s_Moon_43.png'], //
    [622, 'Behind the Tall Wall: Poke, Poke!', '', 'https://mario.wiki.gallery/images/7/7d/SMO_Bowser%27s_Moon_46.png'],
    [623, 'Stretch on the Side Path', '', 'https://mario.wiki.gallery/images/0/0f/SMO_Seaside_Moon_48.png'],
    [623, 'The Tall Rock Shelf in the Deep Ocean', '', 'https://mario.wiki.gallery/images/3/3b/SMO_Seaside_Moon_60.png'],
    [625, 'Secret Path to Mount Volbono!', '', 'https://mario.wiki.gallery/images/1/17/SMO_Luncheon_Moon_47.png'],
    [625, 'From a Crack in the Hard Ground', '', 'https://mario.wiki.gallery/images/9/9f/SMO_Luncheon_Moon_60.png'],
    [627, 'Secret Path to Steam Gardens!', '', 'https://mario.wiki.gallery/images/f/fa/SMO_Wooded_Moon_49.png'],
    [628, 'A Rumble from the Sandy Floor', '', 'https://mario.wiki.gallery/images/3/31/SMO_Sand_Moon_52.png'],
    [628, "Infiltrate Bowser's Castle!", '', 'https://mario.wiki.gallery/images/d/d7/InfiltrateBowserCastle.png'],
    [630, 'The Back Canyon: Excavate!', '', 'https://mario.wiki.gallery/images/9/9d/SMO_Seaside_Moon_18.png'],
    [631, 'The Spinning Maze: Search!', '', 'https://mario.wiki.gallery/images/1/1e/SMO_Seaside_Moon_70.png'],
    [631, 'Climb the Cliff to Get the Nut', '', 'https://mario.wiki.gallery/images/a/a0/SMO_Wooded_Moon_14.png'],
    [633, 'Crossing Lines', '', 'https://mario.wiki.gallery/images/8/82/SMO_Metro_Moon_68.png'],
    [633, 'Rolling Rock by the Falls', '', 'https://mario.wiki.gallery/images/c/c7/SMO_Cascade_Moon_20.png'],
    [635, 'Stretch and Traverse the Jungle', '', 'https://mario.wiki.gallery/images/1/13/SMO_Lost_Moon_32.png'],
    [636, 'Bird Traveling in the Park', '', 'https://mario.wiki.gallery/images/a/ae/SMO_Metro_Moon_70.png'],
    [637, 'Mysterious Flying Object', '', 'https://mario.wiki.gallery/images/1/17/SMO_Moon_Moon_28.png'],
    [638, 'Found With Wooded Kingdom Art', '', 'https://mario.wiki.gallery/images/1/1b/SMO_Wooded_Moon_50.png'],
    [639, 'Icy Jump Challenge', '', 'https://mario.wiki.gallery/images/1/1d/SMO_Snow_Moon_41.png'],
    [640, 'Rolling Rock in the Woods', '', 'https://mario.wiki.gallery/images/6/69/SMO_Wooded_Moon_7.png'],
    [641, 'From the Side Above the Castle Gate', '', 'https://mario.wiki.gallery/images/b/bc/SMO_Bowser%27s_Moon_7.png'], //
    [642, 'Walking on Clouds', '', 'https://mario.wiki.gallery/images/b/bc/SMO_Wooded_Moon_47.png'],
    [643, 'Cheep Cheep Crossing', '', 'https://mario.wiki.gallery/images/8/87/SMO_Lake_Moon_3.png'],
    [643, 'Underwater Highway West: Explore!', '', 'https://mario.wiki.gallery/images/4/44/SMO_Seaside_Moon_56.png'],
    [645, 'Caught Hopping on a Building!', '', 'https://mario.wiki.gallery/images/0/0d/SMO_Metro_Moon_17.png'],
    [645, 'Found with Dark Side Art 2', '', 'https://mario.wiki.gallery/images/a/ab/SMO_Dark_Side_Moon_16.png'],
    [647, 'Bottom of the Waterfall Basin', '', 'https://mario.wiki.gallery/images/d/d8/SMO_Cascade_Moon_26.png'],
    [647, 'Ice Floe Swimming', '', 'https://mario.wiki.gallery/images/4/42/SMO_Snow_Moon_40.png'],
    [649, 'Island in the Poison Swamp', '', 'https://mario.wiki.gallery/images/e/ee/SMO_Sand_Moon_74.png'],
    [649, "Excavate 'n' Search the Cheese Rocks", '', 'https://mario.wiki.gallery/images/6/6c/SMO_Luncheon_Moon_43.png'],
    [651, 'Snow Kingdom Timer Challenge 1', '', 'https://mario.wiki.gallery/images/c/c3/SMO_Snow_Moon_13.png'],
    [652, "Caught Hopping at Bowser's Castle!", '', 'https://mario.wiki.gallery/images/c/cc/SMO_Bowser%27s_Moon_15.png'],
    [652, 'Along the Cliff Face', '', 'https://mario.wiki.gallery/images/d/dc/SMO_Moon_Moon_2.png'],
    [654, 'City Gardening: Building Planter', '', 'https://mario.wiki.gallery/images/c/ca/SMO_Metro_Moon_21.png'],
    [654, "Shopping Near Peach's Castle", '', 'https://mario.wiki.gallery/images/c/c8/SMO_Mushroom_Moon_20.png'],
    [656, 'Dinosaur Nest: Running Wild!', '', 'https://mario.wiki.gallery/images/c/ce/SMO_Cascade_Moon_13.png'],
    [656, 'Tussle in Tostarena: Rematch', '', 'https://mario.wiki.gallery/images/7/7c/SMO_Mushroom_Moon_33.png'],
    [658, 'Sand Kingdom Timer Challenge 3', '', 'https://mario.wiki.gallery/images/6/64/SMO_Sand_Moon_30.png'],
    [659, 'I Met a Snow Cheep Cheep', '', 'https://mario.wiki.gallery/images/b/b5/SMO_Snow_Moon_49.png'],
    [659, 'Hidden on the Side of the Cliff', '', 'https://mario.wiki.gallery/images/7/79/SMO_Moon_Moon_29.png'],
    [661, "Jammin' in the Sand Kingdom", '', 'https://mario.wiki.gallery/images/3/3d/SMO_Sand_Moon_64.png'],
    [662, 'Above the Parasol: Catch!', '', 'https://mario.wiki.gallery/images/8/80/SMO_Seaside_Moon_53.png'],
    [662, 'Big Jump: Escape!', '', 'https://mario.wiki.gallery/images/0/05/SMO_Metro_Moon_50.png'],
    [662, 'On Top of the Rubble', '', 'https://mario.wiki.gallery/images/3/3e/SMO_Cascade_Moon_5.png'],
    [662, 'At the Base of the Lighthouse', '', 'https://mario.wiki.gallery/images/d/d2/SMO_Seaside_Moon_61.png'],
    [662, 'Sea Gardening: Inlet Seed', '', 'https://mario.wiki.gallery/images/b/bd/SMO_Seaside_Moon_23.png'],
    [667, 'Lake Fishing', '', 'https://mario.wiki.gallery/images/9/95/SMO_Lake_Moon_15.png'],
    [668, 'Fishing in the Glacier!', '', 'https://mario.wiki.gallery/images/9/9f/SMO_Snow_Moon_17.png'],
    [668, 'Caught Hopping in the Snow!', '', 'https://mario.wiki.gallery/images/5/5a/SMO_Snow_Moon_10.png'],
    [670, 'Peach in the Cloud Kingdom', '', 'https://mario.wiki.gallery/images/8/83/SMO_Cloud_Moon_2.png'],
    [670, 'Above the Freezing Fish Pond', '', 'https://mario.wiki.gallery/images/2/2e/SMO_Snow_Moon_39.png'],
    [672, 'Found with Snow Kingdom Art', '', 'https://mario.wiki.gallery/images/b/b6/SMO_Snow_Moon_34.png'],
    [673, 'Hat-and-Seek: Mushroom Kingdom', '', 'https://mario.wiki.gallery/images/5/5b/SMO_Mushroom_Moon_42.png'],
    [674, 'Found with Dark Side Art 10', '', 'https://mario.wiki.gallery/images/2/22/SMO_Dark_Side_Moon_24.png'],
    [675, 'Snow Kingdom Timer Challenge 3', '', 'https://mario.wiki.gallery/images/9/92/SMO_Snow_Moon_47.png'],
    [675, 'Ocean Quiz: Good!', '', 'https://mario.wiki.gallery/images/e/ec/SMO_Seaside_Moon_35.png'],
    [677, 'Shopping in Steam Gardens', '', 'https://mario.wiki.gallery/images/3/34/SMO_Wooded_Moon_23.png'],
    [677, 'A Tourist in the Moon Kingdom!', '', 'https://mario.wiki.gallery/images/7/70/SMO_Moon_Moon_25.png'],
    [679, 'Under a Dangerous Ceiling', '', 'https://mario.wiki.gallery/images/1/15/SMO_Seaside_Moon_16.png'],
    [679, 'A Strong Simmer', '', 'https://mario.wiki.gallery/images/5/57/SMO_Luncheon_Moon_27.png'],
    [681, 'Peach in the Cascade Kingdom', '', 'https://mario.wiki.gallery/images/2/2b/SMO_Cascade_Moon_21.png'],
    [681, 'Shopping in Shiveria', '', 'https://mario.wiki.gallery/images/f/f3/SMO_Snow_Moon_21.png'],
    [683, 'Lake Gardening: Spiky Passage Seed', '', 'https://mario.wiki.gallery/images/0/05/SMO_Lake_Moon_9.png'],
    [684, 'Desert Gardening: Seed on the Cliff', '', 'https://mario.wiki.gallery/images/f/fd/SMO_Sand_Moon_27.png'],
    [685, 'Shopping in New Donk City', '', 'https://mario.wiki.gallery/images/2/2b/SMO_Metro_Moon_27.png'],
    [686, 'Caught Hopping at the Waterfall!', '', 'https://mario.wiki.gallery/images/d/d4/SMO_Cascade_Moon_34.png'],
    [686, 'From the Broken Pillar', '', 'https://mario.wiki.gallery/images/f/f2/SMO_Lake_Moon_7.png'],
    [688, 'By the Babbling Brook in Deep Woods', '', 'https://mario.wiki.gallery/images/2/24/SMO_Wooded_Moon_31.png'],
    [689, 'Caught Hopping at the Volcano!', '', 'https://mario.wiki.gallery/images/a/a1/SMO_Luncheon_Moon_35.png'],
    [690, 'Sand Kingdom Timer Challenge 2', '', 'https://mario.wiki.gallery/images/6/64/SMO_Sand_Moon_29.png'],
    [691, 'Bassist on Board!', '', 'https://mario.wiki.gallery/images/a/aa/SMO_Metro_Moon_4.png'],
    [691, 'The Stone Pillar Seal', '', 'https://mario.wiki.gallery/images/0/00/SMO_Seaside_Moon_1.png'],
    [693, 'The Snowy Mountain Barrier', '', 'https://mario.wiki.gallery/images/3/32/SMO_Snow_Moon_4.png'],
    [694, 'Metro Kingdom Slots', '', 'https://mario.wiki.gallery/images/1/1a/SMO_Metro_Moon_28.png'],
    [695, 'Caught Hopping in the Desert!', '', 'https://mario.wiki.gallery/images/a/ae/SMO_Sand_Moon_77.png'],
    [696, 'Trumpeter on Board!', '', 'https://mario.wiki.gallery/images/3/39/SMO_Metro_Moon_5.png'],
    [697, 'Guitarist on Board!', '', 'https://mario.wiki.gallery/images/7/7a/SMO_Metro_Moon_3.png'],
    [698, 'Bird Traveling Over the Lake', '', 'https://mario.wiki.gallery/images/3/30/SMO_Lake_Moon_38.png'],
    [698, 'Inside a Rock in the Forest', '', 'https://mario.wiki.gallery/images/f/fa/SMO_Wooded_Moon_22.png'],
    [700, 'Sphynx in the City', '', 'https://mario.wiki.gallery/images/5/58/SMO_Metro_Moon_59.png'],
    [701, 'Found with Metro Kingdom Art', '', 'https://mario.wiki.gallery/images/e/e3/SMO_Metro_Moon_53.png'],
    [702, 'Hidden in a Sunken Hat', '', 'https://mario.wiki.gallery/images/5/50/SMO_Cap_Moon_23.png'],
    [702, 'Mighty Leap from the Palm Tree!', '', 'https://mario.wiki.gallery/images/c/ce/SMO_Sand_Moon_70.png'],
    [704, 'Rapid Ascent on Hot Spring Island', '', 'https://mario.wiki.gallery/images/8/8c/SMO_Seaside_Moon_58.png'],
    [705, 'Drummer on Board!', '', 'https://mario.wiki.gallery/images/6/63/SMO_Metro_Moon_2.png'],
    [706, 'Peach in the Lost Kingdom', '', 'https://mario.wiki.gallery/images/3/31/SMO_Lost_Moon_25.png'],
    [707, 'Found on the Moon, Good Dog!', '', 'https://mario.wiki.gallery/images/7/7d/SMO_Moon_Moon_16.png'],
    [708, 'Shopping in Fossil Falls', '', 'https://mario.wiki.gallery/images/4/42/SMO_Cascade_Moon_24.png'],
    [709, 'Walking on the Moon!', '', 'https://mario.wiki.gallery/images/2/2d/SMO_Moon_Moon_32.png'],
    [710, 'City Gardening: Plaza Planter', '', 'https://mario.wiki.gallery/images/7/7f/SMO_Metro_Moon_22.png'],
    [711, "Sphynx Over Bowser's Castle", '', 'https://mario.wiki.gallery/images/7/7c/SMO_Bowser%27s_Moon_39.png'],
    [712, 'Rolling Rock on the Battlefield', '', 'https://mario.wiki.gallery/images/1/1d/SMO_Ruined_Moon_8.png'],
    [712, "Found with Bowser's Kingdom Art", '', 'https://mario.wiki.gallery/images/c/cd/SMO_Bowser%27s_Moon_45.png'], //
    [714, 'Gardening for Toad: Garden Seed', '', 'https://mario.wiki.gallery/images/a/ab/SMO_Mushroom_Moon_4.png'],
    [714, 'Wriggling on the Sandy Bottom', '', 'https://mario.wiki.gallery/images/6/6e/SMO_Seaside_Moon_20.png'],
    [714, 'Taxi Flying Through Bonneton', '', 'https://mario.wiki.gallery/images/e/ee/SMO_Cap_Moon_13.png'],
    [714, 'The Hot Spring Seal', '', 'https://mario.wiki.gallery/images/1/11/SMO_Seaside_Moon_3.png'],
    [718, 'Sneaking Around in the Crater', '', 'https://mario.wiki.gallery/images/7/7b/SMO_Moon_Moon_15.png'],
    [719, 'Hat-and-Seek: In the Sand', '', 'https://mario.wiki.gallery/images/d/da/SMO_Sand_Moon_65.png'],
    [720, 'Caught Hopping at Glass Palace!', '', 'https://mario.wiki.gallery/images/a/a2/SMO_Seaside_Moon_63.png'],
    [721, 'Deep, Deep Down', '', 'https://mario.wiki.gallery/images/a/a4/SMO_Lake_Moon_36.png'],
    [721, 'Shopping on Forgotten Isle', '', 'https://mario.wiki.gallery/images/6/63/SMO_Lost_Moon_21.png'],
    [723, 'Sea Gardening: Ocean Trench Seed', '', 'https://mario.wiki.gallery/images/f/f5/SMO_Seaside_Moon_26.png'],
    [723, 'Shopping in Mount Volbono', '', 'https://mario.wiki.gallery/images/5/55/SMO_Luncheon_Moon_25.png'],
    [725, 'Rolling Rock on the Moon', '', 'https://mario.wiki.gallery/images/6/6d/SMO_Moon_Moon_4.png'],
    [726, 'Out of a Crate in the City', '', 'https://mario.wiki.gallery/images/a/ae/SMO_Metro_Moon_69.png'],
    [726, 'Hard Rock in Deep Woods', '', 'https://mario.wiki.gallery/images/9/97/SMO_Wooded_Moon_32.png'],
    [726, 'Desert Gardening: Ruins Seed', '', 'https://mario.wiki.gallery/images/a/ae/SMO_Sand_Moon_26.png'],
    [726, 'Sea Gardening: Hot-Spring Seed', '', 'https://mario.wiki.gallery/images/2/22/SMO_Seaside_Moon_25.png'],
    [726, 'Squirming Under Ice', '', 'https://mario.wiki.gallery/images/4/43/SMO_Snow_Moon_46.png'],
    [726, 'Caught Hopping on the Moon!', '', 'https://mario.wiki.gallery/images/8/88/SMO_Moon_Moon_5.png'],
    [726, "Shopping at Bowser's Castle", '', 'https://mario.wiki.gallery/images/6/69/SMO_Bowser%27s_Moon_29.png'],
    [726, 'Shining Above the Moon', '', 'https://mario.wiki.gallery/images/0/07/SMO_Moon_Moon_1.png'],
    [726, 'Gardening for Toad: Lake Seed', '', 'https://mario.wiki.gallery/images/0/0c/SMO_Mushroom_Moon_7.png'],
    [726, 'Deep in the Cold, Cold Water', '', 'https://mario.wiki.gallery/images/5/5f/SMO_Snow_Moon_44.png'],
    [726, 'Bubblaine Northern Reaches', '', 'https://mario.wiki.gallery/images/4/44/SMO_Seaside_Moon_19.png'],
    [726, 'Fishing in the Oasis', '', 'https://mario.wiki.gallery/images/8/82/SMO_Sand_Moon_34.png'],
    [726, 'Shopping in Lake Lamode', '', 'https://mario.wiki.gallery/images/f/fa/SMO_Lake_Moon_19.png'],
    [726, 'Shopping in Bubblaine', '', 'https://mario.wiki.gallery/images/f/f5/SMO_Seaside_Moon_36.png'],
    [726, 'The Seal Above the Canyon', '', 'https://mario.wiki.gallery/images/8/8b/SMO_Seaside_Moon_4.png'],
    [726, 'Shopping in Bonneton', '', 'https://mario.wiki.gallery/images/8/82/SMO_Cap_Moon_5.png'],
    [726, 'Gardening for Toad: Field Seed', '', 'https://mario.wiki.gallery/images/a/a5/SMO_Mushroom_Moon_5.png'],
    [726, 'Sea Gardening: Canyon Seed', '', 'https://mario.wiki.gallery/images/7/7d/SMO_Seaside_Moon_24.png'],
    [726, 'Gardening for Toad: Pasture Seed', '', 'https://mario.wiki.gallery/images/9/96/SMO_Mushroom_Moon_6.png'],
    [726, 'Underwater Highway East: Explore!', '', 'https://mario.wiki.gallery/images/5/54/SMO_Seaside_Moon_57.png'],
    [726, "Jump 'n' Swim in the Freezing Water", '', 'https://mario.wiki.gallery/images/e/e1/SMO_Snow_Moon_26.png'],
    [726, 'Shopping in Honeylune Ridge', '', 'https://mario.wiki.gallery/images/a/a2/SMO_Moon_Moon_20.png'],
    [726, 'Water Pooling in the Crevasse', '', 'https://mario.wiki.gallery/images/3/32/SMO_Snow_Moon_45.png'],
    [726, 'Shopping in Tostarena', '', 'https://mario.wiki.gallery/images/6/6e/SMO_Sand_Moon_42.png']
]


let availableMoons = moons;
// buttons for selecting higher
const leftHigherBtn = document.getElementById("leftHigherBtn");
const rightHigherBtn = document.getElementById("rightHigherBtn");
// displayed moon names
const leftMoonNameText = document.getElementById("leftMoonName");
const rightMoonNameText = document.getElementById("rightMoonName");
// displayed moon ranking
const leftMoonRankingText = document.getElementById("leftMoonRanking");
const rightMoonRankingText = document.getElementById("rightMoonRanking");
// displayed moon images
const leftMoonDisplayedImg = document.getElementById("leftOption");
const rightMoonDisplayedImg = document.getElementById("rightOption");
// track scores
const currentScoreText = document.getElementById("currentScore");
const highScoreText = document.getElementById("highScore");
const scoreBox = document.getElementById("scoreBox");
let currentScore = 0;
let highScore = 0;
// initialise moon variables
let leftMoon;
let rightMoon;
// for answering
let isCorrect;
let index;
let tempButtons;
let tempMoonStats;
// for rounds
const roundTimeDelay = 3000;
// for cookies
const statsExpiryDate = new Date(2145916800 * 1000)
// for game over
const gameOverDialogue = document.getElementById("gameOverDialogue");
const gameOverWrapper = document.querySelector(".gameOverWrapper");
const playAgainHomeBtn = document.getElementById("playAgainHomeBtn");
const finalScoreText = document.getElementById("finalScoreText");
// for info
const infoDialogue = document.getElementById("infoDialogue");
const infoWrapper = document.querySelector(".infoWrapper");


// return number with suffix
function getSuffix(i) {
    let j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}


// create a cookie
function setCookie(name, value, expiry){
    document.cookie = `${name}=${value}; expires=${expiry.toUTCString()}; path=/`
}
// returns value of given cookie
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie); // grabs whole cookie
    const cArray = cDecoded.split("; "); // splits into array
    let result = null;
    // check each cookie for a match
    cArray.forEach(element => {
        if(element.indexOf(name) === 0){ // if element starts with desired cookie name
            result = element.substring(name.length + 1) // store value in result by going from index after name=
        }
    })
    return result;
}


function displayHighScore(){
    highScore = getCookie("highScore");
    if(highScore === null){
        setCookie("highScore", 0, statsExpiryDate)
        highScoreText.innerHTML = "Best: 0";
    }
    else{
        highScoreText.innerHTML = `Best: ${highScore}`;
    }
}


function getRandomLeftMoon(isFirstRound){
    leftMoon = availableMoons[Math.floor(Math.random()*availableMoons.length)];
    // ensure not the same moon
    while(leftMoon === rightMoon){
        leftMoon = availableMoons[Math.floor(Math.random()*availableMoons.length)];
    }
    // display left moon
    leftMoonNameText.textContent = leftMoon[1];
    leftMoonDisplayedImg.style.backgroundImage = `url(${leftMoon[3]})`;
    // load ranking
    leftMoonRankingText.innerHTML = `<mark>${getSuffix(leftMoon[0])}</mark>`
    // remove from available moons
    index = availableMoons.indexOf(leftMoon);
    if (index > -1) { // only splice array when item is found
        availableMoons.splice(index, 1); // 2nd parameter means remove one item only
    }
}
function getRandomRightMoon(){
    rightMoon = availableMoons[Math.floor(Math.random()*availableMoons.length)];
    // ensure not the same moon
    while(leftMoon === rightMoon){
        rightMoon = availableMoons[Math.floor(Math.random()*availableMoons.length)];
    }
    // display right moon
    rightMoonNameText.innerHTML = `${rightMoon[1]}`;
    rightMoonDisplayedImg.style.backgroundImage = `url(${rightMoon[3]})`;
    // load ranking
    rightMoonRankingText.innerHTML = `<mark>${getSuffix(rightMoon[0])}</mark>`
    // remove from available moons
    index = availableMoons.indexOf(rightMoon);
    if (index > -1) { // only splice array when item is found
        availableMoons.splice(index, 1); // 2nd parameter means remove one item only
    }
}

// select 2 random moons
function getBothRandomMoons(){
    getRandomLeftMoon(true);
    getRandomRightMoon();
}


function nextRound(side){
    if(availableMoons.length === 0){
        availableMoons = moons;
    }
    if(side === "right"){
        getRandomLeftMoon(false);
        showButtons("left");
    }
    else if(side === "left"){
        getRandomRightMoon();
        showButtons("right");
    }
}


function gameOver(){
    // update high score internally, don't display yet
    if(currentScore > getCookie("highScore")){
        setCookie("highScore", currentScore, statsExpiryDate);
    }
    finalScoreText.innerHTML = currentScore;
    openGameOverDialogue();
    playAgainHomeBtn.style.display = "initial";
}


function correctGuess(side){
    // update score
    currentScore++;
    currentScoreText.textContent = `Score: ${currentScore}`;
    // correct effects
    scoreBox.classList.add("correct");
    // start next round
    setTimeout(() => {
        scoreBox.classList.remove("correct");
        nextRound(side);
    }, roundTimeDelay);
}
function incorrectGuess(side){
    scoreBox.classList.add("incorrect");
    setTimeout(() => {
        scoreBox.classList.remove("incorrect");
        gameOver();
    }, roundTimeDelay);
}


function clickHigher(side){
    // check if was correct guess on corresponding side
    if(side === "left"){
        isCorrect = leftMoon[0] <= rightMoon[0];
        showRanking("left");
    }
    else if(side === "right"){
        isCorrect = rightMoon[0] <= leftMoon[0];
        showRanking("right");
    }

    if(isCorrect){
        correctGuess(side);
    }
    else{
        incorrectGuess(side);
    }
}
function clickLower(side){
    // check if was correct guess on corresponding side
    if(side === "left"){
        isCorrect = leftMoon[0] >= rightMoon[0];
        showRanking("left");
    }
    else if(side === "right"){
        isCorrect = rightMoon[0] >= leftMoon[0];
        showRanking("right");
    }

    if(isCorrect){
        correctGuess(side);
    }
    else{
        incorrectGuess(side);
    }
}


function showRanking(side){
    tempButtons = document.getElementById(`${side}Btns`);
    tempMoonStats = document.getElementById(`${side}MoonRanking`);
    tempButtons.style.display = "none";
    document.getElementById(`${side}MoonStats`).style.display = "initial";
    // animate ranking appearance
    tempMoonStats.classList.add("slide-up-class");
    setTimeout(() => {
        tempMoonStats.classList.remove("slide-up-class");
    }, 400);
}
function showButtons(side){
    tempButtons = document.getElementById(`${side}Btns`);
    tempMoonStats = document.getElementById(`${side}MoonStats`);
    tempButtons.style.display = "initial";
    tempMoonStats.style.display = "none";
    // animate button appearance
    tempButtons.classList.add("fade-in-class");
    setTimeout(() => {
        tempButtons.classList.remove("fade-in-class");
    }, 400);
}


let countdownRanking;
function runCountdown(textbox, start, end){
    return new Promise((resolve, reject) => {
        countdownRanking = setInterval(() => {
        // update countdown text
        if(start <= end){ // if finished
            textbox.innerHTML = `<mark>${getSuffix(start)}</mark>`;
            clearInterval(countdownRanking); // end JS timer
            resolve(true)
        }
        else{ // if not finished
            textbox.innerHTML = `<mark>${start}</mark>`;
            start--;
        }
        }, 1000/(start-end)) // makes it always take 1 second to count down
    })
    
}


function playAgain(){
    exitGameOverDialogue();
    // prepare scores
    currentScoreText.innerHTML = "Score: 0";
    currentScore = 0;
    displayHighScore();
    // start new game
    getBothRandomMoons();
    showRanking("left");
    showButtons("right");
    // remove play again button
    playAgainHomeBtn.style.display = "none";
}


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


function deleteHighScore(){
    // force user to confirm once
    let confirmed = false;
    confirmed = confirm("This will PERMANENTLY delete your current high score.\nAre you sure? This is your final chance.");
    if(confirmed){
        setCookie("highScore", 0, statsExpiryDate)
        document.getElementById("confirmDeletedHighScore").innerHTML = "<i>High score deleted (Refresh)</i>";
        setTimeout(() => {document.getElementById("confirmDeletedHighScore").textContent = ""}, 2000) // reset text
    }
}



getBothRandomMoons();
showRanking("left");
showButtons("right");

displayHighScore();

playAgainHomeBtn.style.display = "none";