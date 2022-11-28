export type WpBlock = {
	attributes: {
		classname?: string;
	};
	clientId: string;
	innerBlocks: Array< WpBlock >;
	isValid: boolean;
	name: string;
	originalContent: string;
	validationIssues: [  ];
};
