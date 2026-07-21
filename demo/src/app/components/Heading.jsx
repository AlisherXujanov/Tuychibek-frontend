const Heading = ({ title, color, children }) => {
  return (
    <h1 style={{ color }}>
      {children ? children : title}
    </h1>
  )
}


export default Heading;