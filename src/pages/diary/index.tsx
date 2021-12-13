import ActionBar from '../../components/common/ActionBar';
import Container from '../../components/common/Container';
import Tab from '../../components/common/Tab';
import { useEffect, useState } from 'react';
import Select from '../../components/common/Select';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const TabList = [
	{ label: '가계부', value: 'book' },
	{ label: '분석', value: 'analytic' },
	{ label: '자산', value: 'assets' },
];

const SelectOptions = [
	{ label: '11월', value: '2021-11' },
	{ label: '12월', value: '2021-12' },
];

const Days = '일,월,화,수,목,금,토'.split(',');

const Diary: React.FC = () => {
	const [currTab, setCurrTab] = useState(TabList[0].value);
	const [currDate, setCurrDate] = useState(SelectOptions[0].value);
	const [monthData, setMonthData] = useState([]);

	useEffect(() => {
		const result = [];

		const today = new Date();
		const thisYear = today.getFullYear();
		const thisMonth = today.getMonth();
		const firstDay = new Date(thisYear, thisMonth);
		const lastDay = new Date(thisYear, thisMonth + 1, 0);
		const lastDate = lastDay.getDate();
		const firstWeekPadding = firstDay.getDay();
		const lastWeekPadding = Days.length - (lastDay.getDay() + 1);

		for (let curr = 0, date = 1; curr < lastDate + firstWeekPadding + lastWeekPadding; curr++) {
			const isNewWeek = curr % 7 === 0;
			if (isNewWeek) {
				result.push([]);
			}

			const currWeek = Math.floor(curr / Days.length);
			const target = result[currWeek];
			if (curr < firstWeekPadding || curr >= lastDate + firstWeekPadding) {
				target.push(undefined);
			} else {
				target.push({
					date,
					isSelected: date === today.getDate(),
				});
				date++;
			}
		}
		console.log('result', result);
		setMonthData(result);
	}, []);

	return (
		<>
			<ActionBar title="홈" />
			<Tab value={currTab} items={TabList} onClick={setCurrTab} />
			<Container>
				<Select value={currDate} valueKey="date" options={SelectOptions} onChange={setCurrDate} />
				<Container>
					<h3>이번달 남은 총 자산</h3>
					<div>
						<span>210,340</span>
						<span>원</span>
						<div>
							하루에 <span>13,222</span>원 씩 써야해요
						</div>
					</div>
					<div>
						<span>안썼더라면...</span>
						<div>
							<span>130,004</span>
							<span>원</span>
						</div>
					</div>
				</Container>
				<Container>
					<Table>
						<TableHead>
							<TableRow>
								{Days.map((day, idx) => (
									<TableCell key={idx}>{day}</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{monthData.map((week, idx) => (
								<TableRow key={idx}>
									{week.map((day, idx) => (
										<TableCell key={idx}>
											<div>{day?.date ?? ''}</div>
											{day?.isSelected && <div>선택</div>}
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Container>
			</Container>
		</>
	);
};

export default Diary;
