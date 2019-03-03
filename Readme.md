# Query HOC for React Apollo

Based on fenomenal [react-apollo-dynamic-query](https://www.npmjs.com/package/react-apollo-dynamic-query) this component allows you to pass all necessary `props` to your component without need to use Apollo's `<Query>` component inside every single element that needs to fetch data.

The only difference between orignal library is that now config is a function and takes `props` as an argument.

# Example
```
import { QueryHOC } from './QueryHOC';
import React from 'react';

const DogList = (props) =>
	props.data.entities.map((entity, index) => (
		<div key={index}>
			<span>{`${entity.Name}`}</span>
			<span>{`${entity.Lifespan}`}</span>
			<span>{`${entity.Breed}`}</span>
		</div>
	));

const Example = (props) => (
	<QueryHOC
		entities="Dogs"
		fields="Name, Lifespan, Breed"
		var={{ name: 'Breed', type: 'String' }}
		list={true}
		component={DogList}
		options={{
			variables: { Breed: props.breed },
			pollInterval: 60 * 1000 * 5 //fetch every 5 minutes
		}}
	/>
);

export default Example;
```