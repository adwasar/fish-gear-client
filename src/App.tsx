function App() {
  const fn = (param: string) => {
    console.log(param + '!')
  }

  fn('hello')

  return (
    <>
      <h1>Marketplace</h1>
    </>
  )
}

export default App
