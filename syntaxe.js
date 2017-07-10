db.poney.find(
	{
		gender: 'f', 
		{
			$or: 
			[
				{loves: 'orange'}, 
				{loves: 'apple'}, 
				{weight: {$lt: 500}}
			]
		}
	}
)