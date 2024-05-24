import { Stack } from "expo-router";
import { GluestackUIProvider, Text, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Tooltip, ButtonText, Button, TooltipContent, TooltipText } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" 

export default function RootLayout() {
  return (
      <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>

      <Tooltip
          placement="top" 
          trigger={(triggerProps) => {
            return (
              <Button h='$24' {...triggerProps}>
                <ButtonText>Hover on me!</ButtonText>
              </Button>
            );
          }}
        >
          <TooltipContent>
           <TooltipText>Tooltip</TooltipText>
          </TooltipContent>
        </Tooltip>
      
      <Slider>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
    </Slider>
    </GluestackUIProvider>
  );
}
