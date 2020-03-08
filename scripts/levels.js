module.exports = [
  // level 1
  {
    path: [
      [2, 3],
      [3, 3],
      [4, 3]
    ],
    facing: "east"
  },
  // level 2
  {
    path: [
      [2, 4],
      [2, 3],
      [3, 3],
      [4, 3]
    ],
    facing: "north"
  },
  // level 3
  {
    path: [
      [4, 4],
      [3, 4],
      [3, 3],
      [3, 2],
      [2, 2]
    ],
    facing: "west"
  },
  // level 4
  {
    path: [
      [5, 4],
      [4, 4],
      [3, 4],
      [2, 4],
      [1, 4]
    ],
    facing: "west"
  },
  // level 5
  {
    path: [
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [4, 4],
      [4, 3],
      [4, 2],
      [3, 2],
      [2, 2],
      [1, 2]
    ],
    facing: "east"
  },
  // level 6
  {
    path: [
      [1, 5],
      [1, 4],
      [2, 4],
      [2, 3],
      [3, 3],
      [3, 2],
      [4, 2],
      [4, 1],
      [5, 1]
    ],
    facing: "north"
  },
  // level 7
  {
    path: [
      [3, 4],
      [2, 4],
      [3, 3],
      [3, 2]
    ],
    obstacle: 2,
    switches: [1],
    facing: "north"
  },

  // level 8
  {
    path: [
      [3, 3],
      [3, 2],
      [3, 2],
      [3, 1],
      [4, 3],
      [5, 3]
    ],
    obstacle: 4,
    switches: [3, 2],
    facing: "east"
  },
  // level 9
  {
    path: [
      [3, 3],
      [2, 3],
      [2, 4],
      [3, 4],
      [4, 3],
      [5, 3]
    ],
    obstacle: 4,
    switches: [3, 1],
    facing: "south"
  }
];
