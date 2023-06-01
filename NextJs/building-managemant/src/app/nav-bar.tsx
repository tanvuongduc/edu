export function NavBar({ items }: { items: { title: String; url: String }[] }) {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa', items);

  return (
    <>
      <h1>This is nav bar</h1>
    </>
  )
}

export function Footer({ message }: { message: String }) {

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

