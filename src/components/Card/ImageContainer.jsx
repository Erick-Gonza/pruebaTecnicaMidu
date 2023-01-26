const ImageContainer = ({ cat }) => {
  return (
    <section className="w-full h-auto rounded-md">
      {cat ? <img src={cat} className="rounded-md" /> : <p>Loading cat...</p>}
    </section>
  )
}

export default ImageContainer
