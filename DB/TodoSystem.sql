USE [TodoSystem]
GO
/****** Object:  Table [dbo].[todoList]    Script Date: 3/19/2023 6:11:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[todoList](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](100) NULL,
	[done] [bit] NOT NULL,
	[userId] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 3/19/2023 6:11:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fullName] [nvarchar](100) NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[todoList] ON 

INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (1, N'רכישת מחשב', 1, 2)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (2, N'הזמנת מעלית לחניון', 1, 2)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (3, N'ליקנות קפה', 1, 1)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (4, N'להזמין מראה', 1, 1)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (5, N'לגדל חסה בגינה', 1, 3)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (6, N'להזמין פרחים', 1, 3)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (7, N'dsada', 1, 3)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (8, N'eee', 1, 2)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (9, N'מלח', 1, 4)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (10, N'gdsg', 1, 2)
INSERT [dbo].[todoList] ([id], [description], [done], [userId]) VALUES (11, N'מוריה', 1, 2)
SET IDENTITY_INSERT [dbo].[todoList] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([id], [fullName]) VALUES (1, N'יוסי לוי')
INSERT [dbo].[users] ([id], [fullName]) VALUES (2, N'משה ביטון')
INSERT [dbo].[users] ([id], [fullName]) VALUES (3, N'מירה כהן')
INSERT [dbo].[users] ([id], [fullName]) VALUES (4, N'יוסי שחר')
SET IDENTITY_INSERT [dbo].[users] OFF
GO
ALTER TABLE [dbo].[todoList] ADD  DEFAULT ((1)) FOR [done]
GO
