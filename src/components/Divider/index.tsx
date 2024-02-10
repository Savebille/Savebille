import React from 'react';

interface Props {
	sx?: string;
}

const Divider: React.FC<Props> = ({ sx }) => {
	return <hr className={`border border-h-gray ${sx}`} />;
};

export default React.memo(Divider);
