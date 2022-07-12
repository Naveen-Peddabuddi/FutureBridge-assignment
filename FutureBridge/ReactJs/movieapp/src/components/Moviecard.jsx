import styled from "styled-components"

const Container = styled.div`
    text-align: center;
    border: 1px solid black;
    background-color: white;
    color: black;
    width: 250px;
    height: 400px;
    grid-gap: 30px;
    margin-left: 50px;
`
const Innerdiv = styled.div`
  display: block;
  
`
const Moviecard = (props) => {
    const data = props.dt
  return (
    <Container>
        <img src={data.img} alt="" width='100%' height='70%'/>
        <Innerdiv>
          <p>
           Name : {data.Name}
           <br />
           Rating : {data.Rating}
           < br />
           {data.ReleaseDate}
          </p>
          
        </Innerdiv>
    </Container>
  )
}

export default Moviecard