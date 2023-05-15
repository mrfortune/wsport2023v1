import { Card, css, Col, Row, Button, Text } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export const Card4 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="black">
          Case Study
        </Text>
        <Text h3 color="black">
          The Winery, <br/>Brooklyn
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="./assets/winecard.png"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.5)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={16}>
            Great wine buying experience.
          </Text>
          {/* <Text color="#000" size={12}>
            Get notified.
          </Text> */}
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" disabled css={{
         
          background:'$secondary',
        }}>
              <Text
                css={{ color: "inherit", }}
                size={14}
                weight="normal"
                transform="uppercase"
              >
                <Link href="/" color="#333" css={{color:'#333'}}> 
                Coming soon
                </Link>
              </Text>
              
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
// export const Card4 = () => (
//   <Card css={{ w: "100%", h: "400px" }}>
//     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
//       <Col>
//         <Text size={12} weight="bold" transform="uppercase" color="#333">
//           Case Study 3
//         </Text>
//         <Text h3 color="black">
//           The Winery, Brooklyn
//         </Text>
//       </Col>
//     </Card.Header>
//     <Card.Body css={{ p: 0 }}>
//       <Card.Image
//         src="./assets/winecard.png"
//         objectFit="cover"
//         width="100%"
//         height="100%"
//         alt="Relaxing app background"
//       />
//     </Card.Body>
//     <Card.Footer
//       isBlurred
//       css={{
//         position: "absolute",
//         bgBlur: "#0f111466",
//         borderTop: "$borderWeights$light solid $gray800",
//         bottom: 0,
//         zIndex: 1,
//       }}
//     >
//       <Row>
//         <Col>
//           <Row>
//             <Col span={3}>
//               <Card.Image
//                  src="https://worldshaker.com/assets/wine-app-icon.png"
//                 css={{ bg: "white", br: "50%" }}
//                 height={40}
//                 width={40}
//                 alt="Breathing app icon"
//               />
//             </Col>
//             <Col>
//               <Text color="#d1d1d1" size={12}>
//                Buy Wine 
//               </Text>
//               <Text color="#d1d1d1" size={12}>
//             Wine buying experience
//               </Text>
//             </Col>
//           </Row>
//         </Col>
//         <Col>
//           <Row justify="flex-end">
//             <Button
//               flat
//               auto
//               rounded
//               css={{ color: "#322294", bg: "#CCF381" }}
//             >
//               <Text
//                 css={{ color: "inherit" }}
//                 size={12}
//                 weight="normal"
//                 transform="uppercase"
//               >
//                 <Link href="/wine-store"> 
//                Learn More...</Link>
//               </Text>
//             </Button>
//           </Row>
//         </Col>
//       </Row>
//     </Card.Footer>
//   </Card>
// );
