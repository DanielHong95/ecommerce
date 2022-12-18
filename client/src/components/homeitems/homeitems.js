import React from "react";
import HomeCard from "../homecard/homecard";

function HomeItems() {
  const itemsData = [
    {
      id: 1,
      label: "beer",
      imageUrl:
        "https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      linkUrl: "/content/beer",
    },
    {
      id: 2,
      label: "wine",
      imageUrl:
        "https://images.unsplash.com/photo-1611575189074-9dfbbceb258a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      linkUrl: "/content/wine",
    },
    {
      id: 3,
      label: "spirits",
      imageUrl:
        "https://images.unsplash.com/photo-1563845104280-bd158c3338f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      linkUrl: "content/spirits",
    },
  ];

  return (
    <div>
      {itemsData.map(({ id, label, imageUrl, linkUrl }) => (
        <HomeCard
          key={id}
          label={label}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
}

export default HomeItems;
