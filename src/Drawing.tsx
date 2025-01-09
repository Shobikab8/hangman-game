const HEAD = (
    <div style={{
        border: "8px solid black",
        height: "50px",
        width: "50px",
        borderRadius: "100%",
        position: "absolute",
        top: "49px",
        left: "183px"
    }}></div>
)

const BODY = (
    <div style={{
        background: "black",
        height: "60px",
        width: "8px",
        position: "absolute",
        top: "110px",
        right: 0
    }}></div>
)

const RIGHT_HAND = (
    <div style={{
        background: "black",
        width: "8px",
        height: "70px",
        position: "absolute",
        top: "90px",
        right: "-30px",
        rotate: "60deg" 
    }}/>
)

const LEFT_HAND = (
    <div style={{
        background: "black",
        width: "8px",
        height: "70px",
        position: "absolute",
        top: "90px",
        right: "30px",
        rotate: "-60deg" 
    }}/>
)

const RIGHT_LEG = (
    <div style={{
        background: "black",
        width: "8px",
        height: "60px",
        position: "absolute",
        top: "160px",
        right: "-15px",
        rotate: "-30deg" 
    }}/>
)

const LEFT_LEG = (
    <div style={{
        background: "black",
        width: "8px",
        height: "60px",
        position: "absolute",
        top: "160px",
        right: "15px",
        rotate: "30deg" 
    }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, RIGHT_LEG, LEFT_LEG];

type Props = {
    numberOfGuesses: number;
}

const Drawing = ({numberOfGuesses}: Props) => {
  return (
    <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{
            background: "black",
            width: "8px",
            height: "50px",
            position: "absolute",
            top: 0,
            right: 0
        }}/>

        <div style={{
            background: "black",
            width: "150px",
            height: "8px",
            marginLeft: "70px"
        }}/>

        <div style={{
            background: "black",
            width: "8px",
            height: "280px",
            marginLeft: "70px"
        }}/>

      <div style={{
        background: "black",
        width: "150px",
        height: "8px"
      }}/>
    </div>
  )
}

export default Drawing
