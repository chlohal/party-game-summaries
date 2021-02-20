var INFO_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"/></svg>`,
    HEART_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>`,
    STAR_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>`;

function genColoredIconSvg(icon, color) {
    return icon.replace("path d", `path style="fill:${color}" d`);
}


var jackboxGameHistory = [{"game":"Skribbl","date":"2021-02-18"},{"game":"Skribbl","date":"2021-01-30"},{"game":"Skribbl","date":"2021-01-29"},{"game":"Skribbl","date":"2021-01-22"},{"game":"Skribbl","date":"2021-01-16"},{"game":"Skribbl","date":"2021-01-07"},{"game":"Skribbl","date":"2021-01-01"},{"game":"Skribbl","date":"2020-12-31"},{"game":"Skribbl","date":"2020-12-31"},{"game":"Skribbl","date":"2020-12-30"},{"game":"Skribbl","date":"2020-12-30"},{"game":"Skribbl","date":"2020-12-29"},{"game":"Skribbl","date":"2020-12-28"},{"game":"Skribbl","date":"2020-12-26"},{"game":"Skribbl","date":"2020-12-26"},{"game":"Skribbl","date":"2020-12-26"},{"game":"Skribbl","date":"2020-12-25"},{"game":"Skribbl","date":"2020-12-25"},{"game":"Skribbl","date":"2020-12-25"},{"game":"Skribbl","date":"2020-12-25"},{"game":"Skribbl","date":"2020-06-14"},{"game":"Skribbl","date":"2020-06-12"},{"game":"Skribbl","date":"2020-06-12"},{"game":"Skribbl","date":"2020-06-06"},{"game":"Skribbl","date":"2020-06-06"},
        {"game":"Codenames","date":"2021-02-16"},{"game":"Codenames","date":"2021-02-15"},{"game":"Codenames","date":"2021-02-15"},{"game":"Codenames","date":"2021-01-30"},{"game":"Codenames","date":"2021-01-29"},{"game":"Codenames","date":"2021-01-26"},{"game":"Codenames","date":"2021-01-24"},{"game":"Codenames","date":"2021-01-23"},{"game":"Codenames","date":"2021-01-22"},{"game":"Codenames","date":"2021-01-21"},{"game":"Codenames","date":"2021-01-20"},{"game":"Codenames","date":"2021-01-20"},{"game":"Codenames","date":"2021-01-19"},{"game":"Codenames","date":"2021-01-19"},{"game":"Codenames","date":"2021-01-18"},{"game":"Codenames","date":"2021-01-18"},{"game":"Codenames","date":"2021-01-17"},
        {"game":"PushTheButtonGame","date":"2021-02-19"},{"game":"quiplash3Game","date":"2021-02-18"},{"game":"BlankyBlankGame","date":"2021-02-18"},{"game":"WorldChampionsGame","date":"2021-02-18"},{"game":"TriviaDeath2Game","date":"2021-02-16"},{"game":"TriviaDeath2Game","date":"2021-02-16"},{"game":"RidictionaryGame","date":"2021-02-16"},{"game":"MonsterMingleGame","date":"2021-02-15"},{"game":"STIGame","date":"2021-02-14"},{"game":"PushTheButtonGame","date":"2021-02-14"},{"game":"DrawfulGame","date":"2021-02-14"},{"game":"TriviaDeath2Game","date":"2021-02-13"},{"game":"TriviaDeath2Game","date":"2021-02-12"},{"game":"DrawfulGame","date":"2021-02-12"},{"game":"DrawfulGame","date":"2021-01-26"},{"game":"STIGame","date":"2021-01-26"},{"game":"RapBattleGame","date":"2021-01-18"},{"game":"WorldChampionsGame","date":"2021-01-18"},{"game":"RapBattleGame","date":"2021-01-16"},{"game":"RapBattleGame","date":"2021-01-16"},{"game":"WorldChampionsGame","date":"2021-01-16"},{"game":"quiplash3Game","date":"01-7-2021"},{"game":"MonsterMingleGame","date":"01-7-2021"},{"game":"TriviaDeath2Game","date":"01-7-2021"},{"game":"BRKGame","date":"01-1-2021"},{"game":"quiplash3Game","date":"01-1-2021"},{"game":"TriviaDeath2Game","date":"01-1-2021"},{"game":"BlankyBlankGame","date":"2020-12-30"},{"game":"TriviaDeath2Game","date":"2020-12-30"},{"game":"DrawfulGame","date":"2020-12-30"},{"game":"BlankyBlankGame","date":"2020-12-30"},{"game":"quiplash3Game","date":"2020-12-30"},{"game":"WorldChampionsGame","date":"2020-12-25"},{"game":"RoleModelsGame","date":"2020-11-23"},{"game":"RapBattleGame","date":"11-9-2020"},{"game":"RapBattleGame","date":"11-9-2020"},{"game":"quiplash3Game","date":"2020-10-28"},{"game":"BlankyBlankGame","date":"2020-10-28"},{"game":"BlankyBlankGame","date":"2020-10-28"},{"game":"EverydayGame","date":"2020-10-28"}];

var gameRatings = { "Drawful 2": [3, 10],"Skribbl": [3.2, 10],"Codenames": [3.4, 10],"Blather 'Round": [2.75, 8],"Talking Points": [1.833333333, 6],"Champ'd Up": [3, 9],"The Devils and the Details": [2.428571429, 7],"Quiplash 3": [3.1, 10],"Push The Button": [3.555555556, 9],"Dictionarium": [1.857142857, 7],"Joke Boat": [1.428571429, 7],"Role Models": [1.8, 5],"Trivia Murder Party 2": [3.9, 10],"Patently Stupid": [3.1, 10],"Zeeple Dome": [1.5, 4],"Mad Verse City": [2.857142857, 7],"Split the Room": [2.428571429, 7],"You Don't Know Jack: Full Stream": [1.25, 4],"Civic Doodle": [2.285714286, 7],"Bracketeering": [2.8, 10],"Monster Seeking Monster": [3.5, 10],"Survive the Internet": [3.555555556, 9],"Fibbage 3": [2.7, 10],"Tee K.O.": [3.3, 10],"Fakin' It": [2.875, 8],"Guesspionage": [2.857142857, 7],"Trivia Murder Party": [3.5, 10],"Quiplash 2": [3.3, 10],"Bomb Corp.": [2.75, 4],"Quiplash XL": [3.625, 8],"Bidiots": [2.8, 5],"Earwax": [2, 4],"Fibbage 2": [2.555555556, 9],"Fibbage XL": [3.142857143, 7],"Lie Swatter": [2, 6],"Word Spud": [1.75, 4],"Drawful": [2.428571429, 7],"You Don't Know Jack 2015": [1, 4]  };

var games = [
    {
      "type": "Jackbox",
      "program": "Party Pack 1",
      "description": "You Don't Know Jack 2015 is for 1-4 players. It is based on the standard format for You Don't Know Jack games, four players are tasked to answer multiple choice trivia questions presented obscurely in the game's \"high culture meets pop culture\" format. Players score points in the form of money for answering correctly and in a shorter amount of time and lose money for wrong answers. Multiplayer games also feature \"screws,\" where one player can force another player to answer immediately and can earn a bonus if the \"screwed\" player answers incorrectly.  The winner is the player with the most money at the end of the game.\n",
      "title": "You Don't Know Jack 2015",
      "series": "You Don't Know Jack",
      "seriesIndex": 2015,
      "jackboxPastGameTypeId": "YouDontKnowJack2015Game"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 1",
      "description": "Drawful is for 3-8 players and is a drawing game. Each round starts with each player individually given a playful phrase and a drawing canvas on their local device. They have a short amount of time to draw out that phrase. Following this, each picture is presented to all players, and the other players must enter a phrase they think the picture represents. Then, all those replies, along with the actual phrase for that picture, are presented to the players to make their vote of what they think the original phrase was. The artist of the picture gets points for every vote that guessed their original phrase, while those who wrote other phrases get points for votes their phrase gets.\n",
      "title": "Drawful",
      "series": "Drawful",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "DrawfulGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 1",
      "description": "Word Spud is for 2-8 players and is a word association game. A word is presented and one player, at a time, comes up with a word that is associated with it. The remaining players vote if the association is good or not. From there, the next player starts from the new word to come up with a new association, and the game continues. The player with the most votes for their associations wins.\n",
      "title": "Word Spud",
      "series": "Word Spud",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "WordSpudGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 1",
      "description": "Lie Swatter is for 1-100 players, and it is a multiplayer version of the single-player mobile app that Jackbox Games released prior to Party Pack. Lie Swatter challenges up to 100 players to correctly guess if presented trivia statements are true or not, \"swatting\" those that are false. Players earn points for correct answers and lose points for incorrect ones.\n",
      "title": "Lie Swatter",
      "series": "Lie Swatter",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "LieSwatterGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 1",
      "description": "Fibbage XL is for 2-8 players, and it expands on the original Fibbage with more potential questions. Each round of the game, a player selects from one of five random categories, and an obscure fact is presented to all players with a missing word or phrase to complete it. Each player uses their local device to enter a reply for those missing words; if they enter the actual right answer, they are asked to enter something different. Then, the game presents all replies, including the correct one, to the players, who then select what they think is the right answer. Players score points for selecting the right answer, but can also score if other players select their reply, so players are encouraged to provide seemingly correct answers for their replies. The player with the most points at the end of all rounds is the winner.\n",
      "title": "Fibbage XL",
      "series": "Fibbage XL",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "FibbageXlGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 2",
      "description": "Fibbage 2 is for 2-8 players. As compared to its predecessor, Fibbage 2 offers new sets of questions and incorporates the ability for the audience to vote on answers which can provide an extra scoring boost to the players. A new option called the Defibrillator permits players to delete all lies except one and the truth of the selection for one question.\n",
      "title": "Fibbage 2",
      "series": "Fibbage",
      "seriesIndex": 2,
      "jackboxPastGameTypeId": "Fibbage2Game"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 2",
      "description": "Earwax is for 3-8 players. One player is selected as the judge and is given a choice of two categories. The category is presented to the other players, and these players are each given six random sound effects. Each player then selects two of the sound effects, in order, as a reply to the category. The judge player selects which combined sounds make the most humorous or fitting answer, and that selected player wins a point. The first player to three points wins the game.\n",
      "title": "Earwax",
      "series": "Earwax",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "EarwaxGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 2",
      "description": "Bidiots is for 3-6 players. It is a spiritual successor to Drawful. Players start by drawing images for randomly-assigned categories. The players then bid on these images as if at an art auction, trying to be the highest bidder for the art that matches specific categories, earning bonus prizes for doing so. Players can force other players to bid, and if players run out of money, they can take out a predatory loan to try to compete through the rest of the game. The player with the most money at the end wins the round.\n",
      "title": "Bidiots",
      "series": "Bidiots",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "BidiotsGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 2",
      "description": "Quiplash XL is for 3-8 players. It had been developed as a standalone game prior to the pack, and was included in this pack's release along with previous DLC (Quip Pack 1) and \"over 100 brand new prompts\". In the game's first two rounds, each player is given two prompts to provide an answer to; the prompts are given so that two players see each prompt. Players provide what they believe is a funny answer to each prompt. Then, all players are shown a prompt and the two answers provided. They vote for the answer they think is the best quip. Each vote gains points for the player that wrote the quip, with a possible \"quiplash\" and bonus points if they get all the votes. In the final round, \"The Last Lash,\" all players respond to the same prompt, and vote three times for the best answers of those presented. The player with the most points at the end is the winner.\n",
      "title": "Quiplash XL",
      "series": "Quiplash XL",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "QuiplashXlGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 2",
      "description": "Bomb Corp. is for 1-4 players. One player is an employee of a bomb factory that must deactivate inadvertently-started bombs as they come off the assembly lines, while other players are employees that are given different sets of instructions to help deactivate it. The instructions are specifically obtuse and potentially conflicting, requiring careful communication between players.\n",
      "title": "Bomb Corp.",
      "series": "Bomb Corp.",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "BombCorpGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 3",
      "description": "Quiplash 2 is for 3-8 players. It follows from the original Quiplash, where each player attempts to complete a statement in a humorous way, and the other players vote the best answer. Quiplash 2 introduces new prompts, the ability of the hosting player to create new prompts, the ability of the host to censor players, and new \"Last Lash\" rounds that either requires players to come up with the meaning of a given acronym, complete a caption in a comic strip, or come up with something clever using a given word in a prompt, unlike the previous game's final round, medals determine the points distributed to the players.\n",
      "title": "Quiplash 2",
      "series": "Quiplash",
      "seriesIndex": 2,
      "jackboxPastGameTypeId": "Quiplash2Game"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 3",
      "description": "Trivia Murder Party is for 1-8 players. It has a lighthearted theme of a horror thriller (similar to the Saw franchise). Each round includes a multiple-choice trivia question, with players earning in-game money for being correct, and then a subsequent mini-game if any \"living\" player got the question wrong. The mini-game may cost the lives of one or more remaining players, who then otherwise continue in the game as ghosts. The endgame starts when only one player remains alive, when all players now try to escape along a darkening hallway: each question provides three possible answers to a category, and each player determines which answers belong to it; the leading player only sees two answers, giving trailing players the opportunities to take the lead and escape first.\n",
      "title": "Trivia Murder Party",
      "series": "Trivia Murder Party",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "TriviaMurderPartyGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 3",
      "description": "Guesspionage is for 2-8 players. The game has each player, in turn, guess what percentage of people have a certain quality or do a certain activity, such as texting while driving. If there are more than 5 audience members, they are surveyed prior to the turns to get these percentages, otherwise earlier survey results by Jackbox Games are used. Once the current player makes their guess, the other active players can consider if they are higher or lower than the actual value, including opining if they are off by more than a certain amount. Points are scored by the current player based on how close they are. In the final round, one question with 9 choices is given, and the players all have to pick what they think are three most popular answers, with points awarded based on the answer's popularity, the player with the most points after that wins.\n",
      "title": "Guesspionage",
      "series": "Guesspionage",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "GuesspionageGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 3",
      "description": "Fakin' It is for 3-6 players. It is a local multiplayer game where each player has their own connected device. In each round one player is randomly selected to be the Faker, and all players except the Faker are given instructions that involve some type of physical action, such as raising a hand or making a face; the Faker is not given this information but instead must figure out from the other players what to do. Each player then attempts to guess who the Faker by their actions, with the round ending if the Faker is guessed correctly by all other players, or successfully escaping, after which points are awarded for if at least one player guesses the Faker correctly, everyone guesses correctly, and/or if the Faker escapes capture in each task out of the number allotted (3 for 4-6 players, 2 for 3 players). After the first round, players may select any action they like. The final round is always \"Text You Up\", where each player answers a number of open-ended questions, while the Faker is given different questions which can have overlapping answers with the questions given to the players (for example, the other players may be asked about a positive trait about themselves, while the Faker would be asked what traits they would look for in a companion.) The player with the most points by the end of the game wins.\n",
      "title": "Fakin' It",
      "series": "Fakin' It",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "FakinItGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 3",
      "description": "Tee K.O. is for 3-8 players and is a drawing-based game. Each player draws three images of anything they want, though the game provides suggestions to help. Then each player has a chance to enter several short sayings or slogans. Subsequently, each player is then given two or more random drawings and two or more random sayings, and selects the pair that best fits together as printed on a T-shirt. These designs are then put into a one-on-one voting battle with all other players and audience members as to determine the best-voted T-shirt design and the design that had the longest voting streak. A second round of drawing, slogan writing, pairing, and voting is performed. The winning designs from each round are then put against each other to determine the ultimate winning design. Players are able to order custom printed T-shirts.\n",
      "title": "Tee K.O.",
      "series": "Tee K.O.",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "TeeKoGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 4",
      "description": "Fibbage 3 is for 2-8 players and is the third game of the Fibbage series. The game includes new interactivity with the audience by letting them add their own lies to the selection. The game has a new separate game mode called Fibbage: Enough About You that replaces the game's traditional questions with questions relating to the players.\n",
      "title": "Fibbage 3",
      "series": "Fibbage",
      "seriesIndex": 3,
      "jackboxPastGameTypeId": "Fibbage3Game"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 4",
      "description": "Survive the Internet is for 3-8 players and is a game of user-generated content that takes place on a fictional version of the Internet. One player receives a question that asks their opinion on a topic. Their answer is taken out of context and sent to another player, who is then told to determine what the reply was in response to as if they were on a specific site, attempting to twist the words as best they can to make the first player look bad. All players are then presented with the pairs of original replies and the guessed topic, and vote on which pairing is the most ridiculous. Each vote earns points for the second player and a smaller number for the first player that provided the reply. The player with the most points at the end is the winner, having \"survived the Internet\".\n",
      "title": "Survive the Internet",
      "series": "Survive the Internet",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "STIGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 4",
      "description": "Monster Seeking Monster is for 3-7 players. It has a horror theme where each player is a disguised monster attempting to date other players. Each round, players start by sending up to four messages to other players; the audience, if participating, use mad lib-style prompts to select phrases to send. Following this, each player then selects one other player they would date based on those replies. If two players selected each other, they both earn a heart. Additional scoring bonuses and effects due to the hidden monster power are also accounted for. From the second round on, the monster form of the leading player whose monster form is yet unknown, is revealed to all. The player with the most hearts at the end wins the game, unless other special conditions are met relating to the player's monster.\n",
      "title": "Monster Seeking Monster",
      "series": "Monster Seeking Monster",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "MonsterMingleGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 4",
      "description": "Bracketeering is for 3-16 players and is a tournament-style game for up to sixteen players, played across three rounds. In the first round, players are presented with a prompt to complete with the best or funniest answer they can. These answers are randomly placed on a tournament-style grid. The players are then given one of the tournament matchups and predict which answer will win that match up. Subsequently, each match is then presented to all players and the audience. The answer that gets the highest percentage of votes wins, with the percentage that it wins by tied to how many points those players that guessed that match correctly get. Subsequent match-ups use these best answers going forward. After the final matchup, the player that provided the winning reply gets an additional point bonus. The second round is a \"blind bracket\" where the players are presented with a prompt, but the brackets are based on a different, related prompt using those answers. The third round is a \"triple blind bracket\" where the prompt at each level of the bracket changes.\n",
      "title": "Bracketeering",
      "series": "Bracketeering",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "BRKGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 4",
      "description": "Civic Doodle is for 3-8 players and is an art game similar to Drawful and Bidiots with two players drawing the same piece of art simultaneously. In each round, a start of a doodle is presented to two randomly selected players, and they have a short time to draw atop that; this is done in real time allowing the audience members to provide feedback on either drawing in the form of preselected emoji. After the timer is done, the players and audience vote for which drawing is better, with points awarded to both players based on how many votes they received, as well as an additional bonus based on the emoji votes. Subsequently, two more players then draw atop the highest-voted picture.\n",
      "title": "Civic Doodle",
      "series": "Civic Doodle",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "CivicDoodleGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 5",
      "description": "You Don't Know Jack: Full Stream is for 1-8 players, and it is the newest iteration of the series of the same name. The game is updated to feature similar streaming-friendly features as most other Party Pack games. This includes support for up to eight players and an audience. As the game now uses both mobile devices and computers as a controller, the text-based questions like the Gibberish Question return, new and classic question types are present.\n",
      "title": "You Don't Know Jack: Full Stream",
      "series": "You Don't Know Jack",
      "seriesIndex": 2,
      "jackboxPastGameTypeId": "YouDontKnowJackFullStreamGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 5",
      "description": "Split the Room is for 3-8 players. It presents hypothetical situations with a fill-in-the-blank component to each player. Players try to fill in the blank such that when the question is presented to the other players, the yes or no responses will \"split the room\", with more points for an equal division of answers. The final round, known as the \"Decisive Dimension\", gives prompts with two options where the first is already completed. Players complete the second answer and everyone else picks the option. \n",
      "title": "Split the Room",
      "series": "Split the Room",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "SplitTheRoomGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 5",
      "description": "Mad Verse City is for 3-8 players. Players use giant robots trying to out-rap their opponents. In each round, players are given who they are trying to out-rap, and use their device to fill in various prompts given to them. The game then runs through each rap using a text-to-speech voice, and players give points to the rap that they feel is the best.\n",
      "title": "Mad Verse City",
      "series": "Mad Verse City",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "RapBattleGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 5",
      "description": "Zeeple Dome is for 1-6 players and has up to six players play as contestants in an alien combat arena, the Zeeple Dome, to take down other aliens. The game is physics based, and has players slingshot their characters across the game's levels, cooperatively working together to eliminate enemies and gain power-ups for their team.\n",
      "title": "Zeeple Dome",
      "series": "Zeeple Dome",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "ZeepleDomeGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 5",
      "description": "Patently Stupid is for 3-8 players. Players first write out problems that they need to be solved. These are randomly distributed among players, who are then given the opportunity to draw and name an invention to solve that problem. Players are then able to present their invention to the other players (either using their own voice or allowing the game to present). The other players then use in-game money to fund the invention. Inventions that surpass a funding minimum get a bonus to their inventor. The player with the most funding at the end wins.\n",
      "title": "Patently Stupid",
      "series": "Patently Stupid",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "PatentlyStupidGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 6",
      "description": "Trivia Murder Party 2 is for 1-8 players. It is the sequel to Trivia Murder Party and follows a similar format. In addition to new questions, it includes new Killing Floor mini-games and special items which can help or hinder their ability to survive.\n",
      "title": "Trivia Murder Party 2",
      "series": "Trivia Murder Party",
      "seriesIndex": 2,
      "jackboxPastGameTypeId": "TriviaDeath2Game"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 6",
      "description": "Role Models is for 3-6 players and has players vote for a category and then try to match the other players (including themselves) to one of the items from that category. Players receive points if any of their matches is the majority favorite of the group, and extra points can be won if the player marked their answer as \"99% sure\" and was correct.\n",
      "title": "Role Models",
      "series": "Role Models",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "RoleModelsGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 6",
      "description": "Joke Boat is for 3-8 players. It has players make jokes based on a selected list of words brainstormed by players at the start of the game. During the first two joke rounds, players are given the start of joke prompt with a missing word they select from a random selection of the brainstormed words. They then finish the joke. Pairs of jokes are given to the other players to vote for their favorite. The final round has players take an existing joke setup and try to write a better joke than the original one.\n",
      "title": "Joke Boat",
      "series": "Joke Boat",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "JokeBoatGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 6",
      "description": "Dictionarium is for 3-8 players. Players first create fake definitions and words, and then sentences using those words. The game can either be played where the players are given a fake word as a prompt or a fake slang saying. Players create a definition and then vote on their favorite to continue. Players then create a new word as a synonym of the definition, and finally a sentence using that word.\n",
      "title": "Dictionarium",
      "series": "Dictionarium",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "RidictionaryGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 6",
      "description": "Push The Button is for 4-10 players and takes place on a spaceship, where one or more of the players have been assigned as an alien and the other players, as humans, must eject the aliens before a timer runs out. Each round, one player determines an activity on the ship (such as drawing or writing a response to a question) and selects a number of the other crew to participate. The assigned human players get one prompt, but the aliens get a different one that would likely cause some confusion. The results are shown, and players have the time to determine if any response seems suspicious. In later rounds, alien players have \"hacks\" they can use to either get the correct human prompt or send the alien prompt instead to a human player. At any time before the timer runs down, a player can \"push the button\" and select the other player(s) they believe are an alien. All other players then vote if they agree or not. In order for the players to be ejected, a unanimous vote must be passed, otherwise, play resumes. If the vote succeeds, the game reveals if the players were correct or incorrect. The alien players win if the human players vote out a human or fail to vote out the aliens in time.\n",
      "title": "Push The Button",
      "series": "Push The Button",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "PushTheButtonGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 7",
      "description": "Quiplash 3 is for 3-8 players. It has the series' signature final round, \"The Last Lash\", replaced with the \"Thriplash\", where instead of all players answering the same prompt, each pair of players only receives one prompt instead of the usual two, but must answer with three separate responses.  The game's two-dimensional style art has also been replaced by claymation.\n",
      "title": "Quiplash 3",
      "series": "Quiplash",
      "seriesIndex": 3,
      "jackboxPastGameTypeId": "quiplash3Game"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 7",
      "description": "The Devils and the Details is for 3-8 players. Players become a family of devils, trying to work together to complete a list of mundane chores in certain scenarios, such as while a relative is visiting, with each successful task scoring points towards a net score. Many chores require verbal communication from one player to another to complete that can create confusion. As the players are devils, they competing against each other, and can complete \"selfish\" chores, which provide extra points to the player who completed them, but also build the selfishness meter, which, when full, creates a family emergency, lowering the total score bar and making it harder to win. \n",
      "title": "The Devils and the Details",
      "series": "The Devils and the Details",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "EverydayGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 7",
      "description": "Champ'd Up for 3-8 players. It involves players creating their own champions via a drawing interface with unusual monikers and skills, similar to Tee KO's t-shirts. The players' creations are then pitted against each other with players and the audience votes for the best one in each round based on how well the character would meet a certain task.\n",
      "title": "Champ'd Up",
      "series": "Champ'd Up",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "WorldChampionsGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 7",
      "description": "Talking Points is for 3-8 players. One person, as a presenter, is shown a series of text and picture slides which they are seeing for the first time, and must talk through these as to impress the audience, which votes with their reactions. Others in the game act as assistant to the presenter to select the next slide that the presenter will see from a random selection, which could either help or throw off the presenter.\n",
      "title": "Talking Points",
      "series": "Talking Points",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "TalkingPointsGame"
    },
    {
      "type": "Jackbox",
      "program": "Party Pack 7",
      "description": "Blather 'Round is for 2-6 players. Its style is very similar to Charades, where players have to pick a place, story, thing, or person to describe using sentences. While one player gives hints as to what they have chosen with fixed sentences, the other players must try to guess what the presenter is describing. Points are rewarded to the describer and whomever correctly guesses what word they chose, as well as those who contributed a helpful hint.\n",
      "title": "Blather 'Round",
      "series": "Blather 'Round",
      "seriesIndex": 1,
      "jackboxPastGameTypeId": "BlankyBlankGame"
    },
    {
      "type": "webroom",
      "program": "Codenames",
      "description": "One player of each team is selected as the team's spymaster; the others are operatives. Twenty-five Codename cards, each bearing one word, are laid out in a 5×5 rectangular grid in random order. Some of these words represent red team agents, some blue team. One represents an assassin, and the others represent innocent bystanders. Only spymasters see the meanings of these words. Spymasters take turns giving one-word hints to their operatives, trying to get them to select as many of their cards as possible. The game ends when all of a team's cards are identified (winning the game for that team) or if a team picks the assassin card (losing the game).",
      "title": "Codenames",
      "series": "Codenames",
      "seriesIndex": 1
    },
    {
      "type": "webroom",
      "program": "Skribbl.io",
      "description": "One player is tasked to draw a word, selected from a choice of 3 words. Other players must guess the word that the drawing is intended to represent, getting points based on how quickly they do so. The drawer gets points for each person who is able to guess their word. Each drawer is given a minute, after which the position rotates to the next person.",
      "title": "Skribbl",
      "series": "Skribbl",
      "seriesIndex": 1
    },
    {
      "type": "Jackbox",
      "program": "Drawful 2",
      "description": "Drawful 2 is a standalone game that follows the same format of Drawful from the 2014 Party Pack. Players are presented with a silly phrase they must try to draw out on a canvas. The picture is then shown to all players, who attempt to guess the original phrase, with points awards to players who select that phrase, and to players who have their response voted as the \"correct\" phrase. Drawful 2 has added features, such as allowing players to use two colors for their drawings. The game includes support for user-generated phrases which are created in a similar party-oriented manner as the game itself, which then can be shared with other players via a code.",
      "title": "Drawful 2",
      "series": "Drawful",
      "seriesIndex": 2,
      "jackboxPastGameTypeId": "DrawfulGame"
    }
  ]