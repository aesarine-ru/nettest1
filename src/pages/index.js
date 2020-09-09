import React from "react";
import theme from "theme";
import { Theme, Image, Text } from "@quarkly/widgets";
export default (() => {
	return <Theme theme={theme}>
		<Image width="64px" height="64px" />
		<Text>
			Some text
		</Text>
	</Theme>;
});