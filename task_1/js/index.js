// 1. задано 234245645335 секунд вивести скільки пройшло секунд з останньої повної години

let seconds = 234245645335;

answer = (sec) => {
  sec = sec % 60;
  console.log(sec)
};

answer(seconds);