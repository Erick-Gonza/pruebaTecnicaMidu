const TextContainer = ({ fact }) => {
  return (
    <section className="text-2xl font-bold">
      {fact ? <p>The fact is: {fact}</p> : <p>Loading fact...</p>}
    </section>
  )
}

export default TextContainer
