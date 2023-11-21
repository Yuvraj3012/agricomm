import { ScrollView, Text } from "react-native";
import PostListItem from "../../components/PostListItem";
import posts from '../../assets/data/posts.json'
import { useLocalSearchParams } from 'expo-router';

const PostDetails = () => {
    const { id } = useLocalSearchParams();
    const post = posts.find((p) => p.id === id);
  
    if (!post) {
      return <Text>Not found</Text>;
    }
  
    return <PostListItem post={post} />;
  };
  
  export default PostDetails;