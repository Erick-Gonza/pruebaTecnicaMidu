const RefreshFact = ({ handleNewFact }) => {
  return (
    <button className="px-2 py-3 bg-red-500 rounded-md" onClick={handleNewFact}>
      Get new Fact
    </button>
  )
}

export default RefreshFact
