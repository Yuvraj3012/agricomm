import { FlatList } from 'react-native';
import posts from '../../assets/data/worker.json';
import WorkListItem from '../../components/workerslistItems';

export default function WorkFeed() {
  return (
    <FlatList
    data={posts}
    renderItem={({ item }) => <WorkListItem apost={item} />}
    contentContainerStyle={{ gap: 10 }}
    showsVerticalScrollIndicator={false}
  />
  )
}