import React from 'react';
import Router from 'next/router';

export default class extends React.Component {
	static async getInitialProps({ res }) {
		if (res) {
			res.writeHead(302, {
				Location: 'https://zeplin.io/?utm_campaign=partner_designdetailsfm_podcast-february-2022',
			});
			res.end();
		} else {
			Router.push('/');
		}
		return {};
	}
}
