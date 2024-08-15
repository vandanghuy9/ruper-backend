const blogData = [
  {
    title: "Easy Fixes for Home Decor",
    category: "Furniture",
    content: `<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p><blockquote><p>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote><p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>`,
    previous: null,
    next: null,
    imageUrl: ["/blog/1.jpg", "/blog/details.jpg"],
    tags: ["Minimal", "Simple", "Furniture"],
    comment: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
        userName: "Peter Capidal",
        userEmail: "peter@gmail.com",
        userWebsite: "",
      },
    ],
  },
  {
    title: "Elevate Your Living Space with Minimalist Furniture",
    category: "Furniture",
    content: `<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p><blockquote><p>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote><p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>`,
    previous: null,
    next: null,
    imageUrl: ["/blog/2.jpg", "/blog/details.jpg"],
    tags: ["minimal", "furniture"],
    comment: [
      {
        content: "Great article!",
        userName: "John Doe",
        userEmail: "johndoe@example.com",
        userWebsite: "https://example.com",
      },
    ],
  },
  {
    title: "Transform Your Kitchen with Modern Dining Sets",
    category: "Dining and Kitchen",
    content: `<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p><blockquote><p>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote><p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>`,
    previous: null,
    next: null,
    imageUrl: ["/blog/3.jpg", "/blog/details.jpg"],
    tags: ["dining", "kitchen", "modern"],
    comment: [
      {
        content: "Love the design ideas!",
        userName: "Jane Smith",
        userEmail: "janesmith@example.com",
        userWebsite: "",
      },
      {
        content: "Where can I find these items?",
        userName: "David Brown",
        userEmail: "davidbrown@example.com",
        userWebsite: "https://davidbrown.com",
      },
    ],
  },
  {
    title: "Revamp Your Home Office with Stylish Desks",
    category: "Office",
    content: `<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p><blockquote><p>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote><p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>`,
    previous: null,
    next: null,
    imageUrl: ["/blog/4.jpg", "/blog/details.jpg"],
    tags: ["office", "desk", "organization"],
    comment: [
      {
        content: "Love the desk ideas!",
        userName: "Emily Carter",
        userEmail: "emilycarter@example.com",
        userWebsite: "",
      },
      {
        content: "Where can I find similar chairs?",
        userName: "Michael Johnson",
        userEmail: "michaeljohnson@example.com",
        userWebsite: "https://michaeljohnson.com",
      },
    ],
  },
  {
    title: "Outdoor Living: Transform Your Backyard Oasis",
    category: "Lifestyle",
    content: `<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p><blockquote><p>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote><p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>`,
    previous: null,
    next: null,
    imageUrl: ["/blog/5.jpg", "/blog/details.jpg"],
    tags: ["outdoor", "lifestyle", "relaxation"],
    comment: [
      {
        content: "Great inspiration for my backyard!",
        userName: "Olivia Harris",
        userEmail: "oliviaharris@example.com",
        userWebsite: "",
      },
    ],
  },
  {
    title: "Kitchen Makeover: Small Space, Big Impact",
    category: "Dining and Kitchen",
    content: `<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p><blockquote><p>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote><p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>`,
    previous: null,
    next: null,
    imageUrl: ["/blog/6.jpg", "/blog/details.jpg"],
    tags: ["kitchen", "small space", "organization"],
    comment: [
      {
        content: "Love the storage ideas!",
        userName: "Ethan Walker",
        userEmail: "ethanwalker@example.com",
        userWebsite: "",
      },
      {
        content: "Inspiring kitchen makeover!",
        userName: "Ava Miller",
        userEmail: "avamiller@example.com",
        userWebsite: "https://avamiller.com",
      },
    ],
  },
  {
    title: "Create a Serene Bedroom Sanctuary",
    category: "Home Decor",
    content: `<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p><blockquote><p>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote><p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>`,
    previous: null,
    next: null,
    imageUrl: ["/blog/7.jpg", "/blog/details.jpg"],
    tags: ["bedroom", "home decor", "relaxation"],
    comment: [
      {
        content: "Beautiful bedroom ideas!",
        userName: "Noah Baker",
        userEmail: "noahbaker@example.com",
        userWebsite: "",
      },
    ],
  },
  {
    title: "Elevate Your Living Room with Stylish Accessories",
    category: "Home Decor",
    content: `<p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisiVivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit.Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p><blockquote><p>Vivamus aliquet elit ac nisl. Ut a nisl id ante tempus hendrerit. Phasellus accumsan cursus velitid ante tempus hendrerit. Donec interdum, metus et hendrerit aliquet”</p><h2>ROBERT SMITH</h2></blockquote><p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p><p>Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Etiam rhoncus. Nunc interdum lacus sit amet orci. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>`,
    previous: null,
    next: null,
    imageUrl: ["/blog/1.jpg", "/blog/details.jpg"],
    tags: ["living room", "accessories", "home decor"],
    comment: [
      {
        content: "Great tips for styling a living room!",
        userName: "Sophia Lee",
        userEmail: "sophialee@example.com",
        userWebsite: "",
      },
      {
        content: "Love the accessory ideas!",
        userName: "Liam Carter",
        userEmail: "liamcarter@example.com",
        userWebsite: "https://liamcarter.com",
      },
    ],
  },
];

export default blogData;
