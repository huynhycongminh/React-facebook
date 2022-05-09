import React from "react";
import Story from "./story.component";
import "./storyList.scss";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchStory } from "../../../../../redux/actions/storyAction/storyAction";
const StoryList = () => {
  const { isLoading, stories, userId } = useSelector(
    (state) => ({
      isLoading: state.story.isLoading,
      stories: state.story.stories,
      userId: state.user.user_id,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchStory());
    }
  }, [isLoading, dispatch]);

  const myStories =
    stories && stories.filter((str) => str.data.createdBy === userId);
  return (
    <div className=" storyList ">
      {myStories.map((str, index) => (
        <Story key={index}
          image_story={str.data.image_story}
          avatar_story={str.data.avatar_story}
          name_story={str.data.name_story}
        />
      ))}
    </div>
  );
};
export default StoryList;
