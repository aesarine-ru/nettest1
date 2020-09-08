import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Box
			padding="1rem 1rem 1rem 1rem"
			display="flex"
			align-items="center"
			justify-content="center"
			background="--color-greyD2"
		>
			<Components.DownloadCard background="--color-light" />
		</Box>
	</Theme>;
});