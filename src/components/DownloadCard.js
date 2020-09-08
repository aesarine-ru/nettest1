import React from 'react';
import atomize from "@quarkly/atomize";
import Card from "./Card";
import { useOverrides } from "@quarkly/components";
import { Icon, Text, Link } from "@quarkly/widgets";
const IconBlock = atomize.div();
let overrides = {
	'icon': {
		'kind': 'Icon',
		'props': {
			'size': '28px',
			'color': '--light',
			'category': 'fa'
		}
	},
	'link': {
		'kind': 'Link',
		'props': {
			'target': '_blank'
		}
	}
};
overrides['icon-light'] = { ...overrides.icon,
	'props': { ...overrides.icon.props,
		'icon': 'FaFile'
	}
};
overrides['icon-dark'] = { ...overrides.icon,
	'props': { ...overrides.icon.props,
		'icon': 'FaFileAlt'
	}
};

const DownloadFile = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const {
		theme,
		iconBgSize,
		iconBgColor,
		iconBgRadius
	} = props;
	return <Card {...rest} ai="center" fxd="column" d="flex">
		      
		<IconBlock
			mb="14px"
			w={iconBgSize}
			h={iconBgSize}
			bgc={iconBgColor || '--primary'}
			bdrs={iconBgRadius}
			ai="center"
			jc="center"
			d="flex"
		>
			        
			<Icon {...override(`icon-${theme}`)} p="4px" />
			      
		</IconBlock>
		      
		<Text
			{...override(`name`)}
			m="0"
			p="2px"
			fz="12px"
			ff="--font-base"
			c="--primary"
			tt="uppercase"
			us="none"
			cur="default"
		>
			        Filename.pdf
      
		</Text>
		      
		<Text
			{...override(`description`)}
			m="0 0 12px"
			p="2px"
			fz="12px"
			ff="--font-base"
			c={`--${theme === 'light' ? 'dark' : 'light'}`}
			us="none"
			cur="default"
		>
			        File size: 0.0 b
      
		</Text>
		      
		<Link
			{...override(`link`)}
			m="0"
			p="2px"
			font="--font-normal"
			fz="12px"
			fw="500"
			c="--primary"
			hover-c={`--${theme === 'light' ? 'dark' : 'light'}`}
			tt="uppercase"
			td="none"
			us="none"
			cur="pointer"
		>
			        Download
      
		</Link>
		    
	</Card>;
};

export default atomize(DownloadFile)({
	name: "DownloadFile",
	effects: {
		hover: ":hover"
	},
	overrides,
	normalize: true,
	mixins: true,
	description: {
		en: "DownloadFile — my awesome component"
	},
	propInfo: {
		theme: {
			description: {
				en: "Card theme"
			},
			control: "radio-group",
			variants: ['light', 'dark'],
			category: 'Card',
			weight: 1
		},
		radius: {
			description: {
				en: "Border radius"
			},
			control: "input",
			category: 'Card',
			weight: 1
		},
		iconBgSize: {
			description: {
				en: "Icon background size"
			},
			control: "input",
			category: 'Icon',
			weight: .5
		},
		iconBgRadius: {
			description: {
				en: "Icon background radius"
			},
			control: "input",
			category: 'Icon',
			weight: .5
		},
		iconBgColor: {
			description: {
				en: "Icon background color"
			},
			control: "color",
			category: 'Icon',
			weight: .5
		}
	}
}, {
	theme: 'light',
	radius: '0px',
	iconBgSize: '72px',
	iconBgRadius: '100%'
});