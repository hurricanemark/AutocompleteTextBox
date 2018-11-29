import React from 'react';
import './AutoCompleteText.css';
export default class AutoCompleteText extends React.Component {
	constructor (props) {
		super(props);

		this.items = [
			'Amy',
			'Ann',
			'Annette',
			'Apple',
			'Babe',
			'Bill',
			'Bob',
			'Boom',
			'Buck',
			'Charlie',
			'Chuck',
			'Coocoo',
			'Dan',
			'Debbie',
			'Docker',
			'Dobson',
			'Ema',
			'Ema',
			'Emily',
			'Emperor',
			'Emmitte',
			'Enron',
			'Fenny',
			'Fume',
			'Funny',
			'Game',
			'Goerge',
			'Google',
			'Gimmly',
			'Hans',
			'Ham',
			'Honey',
			'Ibrahem',
			'Ivy',
			'Jack',
			'Jim',
			'Johane',
			'Kane',
			'Karine',
			'Lex',
			'Lily',
			'Lomis',
			'Marcus',
			'Merline',
			'Mumbai',
			'Nathan',
			'Nagel',
			'Norman',
			'Ohara',
			'Omikasu',
			'Pamela',
			'Peewee',
			'Pimentel',
			'Qubo',
			'Qui',
			'Ralffy',
			'Raphielle',
			'Ronald',
			'Sam',
			'Shane',
			'Shue',
			'Roland',
			'Rollie',
			'Romano',
			'Ronald',
			'Rollie',
			'Salad',
			'Sushi',
			'Swanky',
			'Sunny',
			'Taylor',
			'Taylor',
			'Tracy',
			'Uber',
			'Ugh',
			'Umpty',
			'Utah',
			'Victor',
			'Von',
			'Washabi',
			'Xing',
			'Yaml',
			'Young',
			'Yonder',
			'Zack',
			'Zenna',
			'Zosk',
			'Zumma',
			'Zune',
		];
		this.state = {
			suggestions: [],
			text: '',
		};
	}
	onTextChanged = (e) => {
		const { items } = this.props;
		const value = e.target.value;
		let suggestions = [];
		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, 'i');
			suggestions = items.sort().filter(v => regex.test(v));
		}
		this.setState(() => ({ suggestions, text: value }));
	}

	renderSuggestions () {
		const { suggestions } = this.state;
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<ul>
				{suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
			</ul>
		);
	}

	suggestionSelected(value) {
		this.setState(() => ({
			text: value,
			suggestions: [],
		}))	
	}

	render() {
		const { text } = this.state;
		return (
			<div className="AutoCompleteText">
			<input value={text} onChange={this.onTextChanged} type="text" />
				{this.renderSuggestions()}
			</div>
		);
	}
}
