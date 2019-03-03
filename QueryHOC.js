import gql from 'graphql-tag';
import { graphqlDynamic } from './DynamicQuery';
import { withStyles } from '@material-ui/core/styles';

const ListEntities = (props) => {
	if (props.data.loading) return props.loadingComponent || null;
	if (props.data.error) return props.errorComponent || null;
	if (!props.data.entities.length && !props.data.entities) return props.noDataComponent || null;
	if (props.list && !props.data.entities[0]) return props.noDataComponent || null;
	return props.component(props);
};

const query = (props) => {
	return gql`
		query ${props.entities}($${props.var.name}: ${props.var.type}) {
			entities: ${props.entities}(${props.var.name}: $${props.var.name}) {
				${props.fields}
			}
		}
	`;
};

const config = (props) => {
	const { options } = props;
	return { options };
};

export const QueryHOC = graphqlDynamic(query, config)(ListEntities);
