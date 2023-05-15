import { Card, css, Col, Row, Button, Text } from "@nextui-org/react";
import { useTheme } from '@nextui-org/react';

import { Link } from "@nextui-org/react";



export const Card5 = () => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Case Study
        </Text>
        <Text h3 color="white">
          Fade.technology
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="./assets/fadecard.png"
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
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#fff" size={16}>
           Designing a B2B dashboard.
          </Text>
          {/* <Text color="#fff" size={12}>
            Get notified.
          </Text> */}
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="primary" css={{
          background:'$secondary'
        }}>
              <Text
                css={{ color: "primary" }}
                size={14}
                weight="normal"
                transform="uppercase"
              >
               <Link href="/fade-solutions" color="white"> 
              Read more...</Link>

              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
// export const Card5 = () => (
//   <Card css={{ w: "100%", h: "400px" }}>
//     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
//       <Col>
//         <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
//           Case Study 2
//         </Text>
//         <Text h3 color="white">
//           Fade.technology
//         </Text>
//       </Col>
//     </Card.Header>
//     <Card.Body css={{ p: 0 }}>
//       <Card.Image
//         src="./assets/fadecard.png"
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
//                 src="https://worldshaker.com/assets/fade-app-icon.png"
//                 css={{ bg: "gray", br: "50%" }}
//                 height={40}
//                 width={40}
//                 alt="Breathing app icon"
//               />
//             </Col>
//             <Col>
//               <Text color="#d1d1d1" size={12}>
//                Fade
//               </Text>
//               <Text color="#d1d1d1" size={12}>
//                 Data-visualization
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
//                 <Link href="/west-side-german-shepherd"> 
//                Learn More...</Link>
//               </Text>
//             </Button>
//           </Row>
//         </Col>
//       </Row>
//     </Card.Footer>
//   </Card>
// );
