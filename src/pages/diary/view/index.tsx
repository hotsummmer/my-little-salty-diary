import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import { ArrowBack } from '@mui/icons-material';
import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';

interface Log {
	readonly id: string;
	readonly icon: string;
	readonly category: string;
	readonly amount: number;
	readonly memo: string;
}

interface DiaryViewProps {
	readonly title: string;
	readonly date: Date;
	readonly feedBack: string;
	readonly totalSpent: number;
	readonly wellSpent: number;
	readonly wellSpentRate: number;
	readonly notWellSpent: number;
	readonly notWellSpentRate: number;
	readonly log: Log[];
}

function getData(id: string): DiaryViewProps {
	console.log('load', id);
	const date = new Date();
	const budgetAmount = 33234 - 13234;
	const totalSpent = 30324;
	const overBudget = budgetAmount - totalSpent;
	const wellSpent = 10324;
	const wellSpentRate = Math.round((wellSpent / totalSpent) * 100);
	const notWellSpent = 20000;
	const notWellSpentRate = Math.round((notWellSpent / totalSpent) * 100);
	const feedBack =
		overBudget < 0
			? `원래 예산보다 ${Math.abs(overBudget).toLocaleString()}원 초과했어요 😔`
			: `예산에 맞춰 잘 하고 계시네요 👍`;

	return {
		title: date.toLocaleDateString(),
		date,
		feedBack,
		totalSpent,
		wellSpent,
		wellSpentRate,
		notWellSpent,
		notWellSpentRate,
		log: [
			{
				id: 'dsdfjl12',
				icon: '🙆🏽‍♂️',
				category: '생필품',
				amount: 10244,
				memo: '샴푸',
			},
			{
				id: 'dsdfjl123',
				icon: '🙅🏽‍♂️',
				category: '쇼핑',
				amount: 12000,
				memo: '하리보 캘린더',
			},
			{
				id: 'dsdfjl14',
				icon: '🙅🏽‍♂️️',
				category: '생필품',
				amount: 990,
				memo: '하리보 젤리',
			},
		],
	};
}

const DiaryView: React.FC = () => {
	const router = useRouter();
	const id = router.isReady ? (router.query.id as string) ?? '' : '';

	const { title, feedBack, totalSpent, wellSpent, wellSpentRate, notWellSpent, notWellSpentRate, log } = getData(id);

	return (
		<Box>
			<AppBar position="fixed" color="default">
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="back-button" sx={{ mr: 2 }}>
						<ArrowBack />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Box sx={{ padding: '20px 0' }}>
				<Typography variant="subtitle1" align="center" component="div">
					{feedBack}
				</Typography>
				<Typography variant="h6" align="center" component="div">
					{totalSpent.toLocaleString()}원
				</Typography>
				<Typography variant="body1" align="center" component="div">
					🙆🏽 {wellSpent.toLocaleString()}원 ({wellSpentRate}%)
				</Typography>
				<Typography variant="body1" align="center" component="div">
					🙅🏽‍ {notWellSpent.toLocaleString()}원 ({notWellSpentRate}%)
				</Typography>
			</Box>
			<Divider />
			<Box>
				<List sx={{ bgcolor: 'background.paper' }}>
					{log.map((item) => {
						const { id, icon, amount, category, memo } = item;
						return (
							<ListItem
								key={id}
								alignItems="flex-start"
								onClick={() => router.push({ pathname: '/diary/edit', query: { id } })}
							>
								<ListItemText sx={{ flex: 'none', marginRight: '20px' }}>
									<Typography sx={{ fontSize: '20px' }} component="span" variant="body1" color="text.primary">
										{icon}
									</Typography>
								</ListItemText>
								<ListItemText
									sx={{ flex: 1, marginLeft: 'auto' }}
									primary={`${amount.toLocaleString()}원`}
									secondary={`[${category}] ${memo}`}
								/>
							</ListItem>
						);
					})}
				</List>
			</Box>
		</Box>
	);
};

export default DiaryView;
