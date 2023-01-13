import Link from 'next/link'
const SimpleNav = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="../atoms/atoms">Atoms</Link>
      </li>
    </ul>
  )
}

export default SimpleNav