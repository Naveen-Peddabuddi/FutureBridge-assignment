import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Moviecard from "./Moviecard"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 100%;
`

const Movie = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        setLoading(true)
        const result = async()=> {
            try{
                await axios.get("http://localhost:5000/getmovie").then((res)=> {
                    setData(res.data.MovieData)
                   
                }).catch((e)=>{
                    console.log(e.message)
                })
            }
            catch(e){
                console.log(e.message)
            }
        }
        result()
        setLoading(false)
    },[])
        if(loading){
            return (
                <Container>
                    Loading
                </Container>
            )
        }

        console.log(Array.isArray(data))
        return( 
            <Container>
               {data.map((e,i)=> {
                return(
                <div key = {i}>
                    <Moviecard dt={e} />
                </div>
                )
                })}
            </Container>
        )
    
       
}

export default Movie