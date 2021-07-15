import React, { useState } from "react";

const Anecdote = ({ text, votes }) => (
  <div>
    <div>{text}</div>
    <div>has {votes} votes</div>
  </div>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes.map((_) => 0));
  const [mostVotedFor, setMostVotedFor] = useState({ index: 0, votes: 0 });

  const randomSelect = () => {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  };

  const updateMostVotedFor = () => {
    if (votes[selected] > mostVotedFor.votes) {
      const newMostVotedFor = { index: selected, votes: votes[selected] };
      setMostVotedFor(newMostVotedFor);
    }
  };

  const updateVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    updateMostVotedFor();
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={randomSelect}>next anecdote</button>
      <button onClick={updateVotes}>vote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote
        text={anecdotes[mostVotedFor.index]}
        votes={votes[mostVotedFor.index]}
      />
    </div>
  );
};

export default App;
