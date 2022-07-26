USE [master]
GO
/****** Object:  Database [Shop]    Script Date: 22/02/2022 12:25:43 ******/
CREATE DATABASE [Shop]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Shop', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Shop.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Shop_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Shop_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Shop] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Shop].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Shop] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Shop] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Shop] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Shop] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Shop] SET ARITHABORT OFF 
GO
ALTER DATABASE [Shop] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [Shop] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Shop] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Shop] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Shop] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Shop] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Shop] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Shop] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Shop] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Shop] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Shop] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Shop] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Shop] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Shop] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Shop] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Shop] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Shop] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Shop] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Shop] SET  MULTI_USER 
GO
ALTER DATABASE [Shop] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Shop] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Shop] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Shop] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Shop] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Shop] SET QUERY_STORE = OFF
GO
USE [Shop]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 22/02/2022 12:25:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[CategoryCode] [smallint] IDENTITY(100,10) NOT NULL,
	[CategoryName] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[CategoryCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 22/02/2022 12:25:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CustID] [smallint] IDENTITY(1,1) NOT NULL,
	[CustPassword] [nvarchar](10) NULL,
	[FirstName] [nvarchar](10) NULL,
	[LastName] [nvarchar](10) NULL,
	[CustAddress] [nvarchar](50) NULL,
	[CustPhone] [nvarchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[CustID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 22/02/2022 12:25:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetails](
	[OrderDetailsCode] [int] IDENTITY(1,1) NOT NULL,
	[OrderCode] [int] NULL,
	[ProductCode] [smallint] NULL,
	[Quantity] [int] NULL,
 CONSTRAINT [PK_OrderDetails] PRIMARY KEY CLUSTERED 
(
	[OrderDetailsCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 22/02/2022 12:25:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderCode] [int] IDENTITY(1000,1) NOT NULL,
	[OrderDate] [date] NULL,
	[CustID] [smallint] NULL,
	[OrderSum] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 22/02/2022 12:25:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductCode] [smallint] IDENTITY(100,1) NOT NULL,
	[ProductName] [nvarchar](50) NULL,
	[ProductDescription] [nvarchar](50) NULL,
	[CategoryCode] [smallint] NULL,
	[Cost] [money] NULL,
	[Picture] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[ProductCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([CategoryCode], [CategoryName]) VALUES (100, N'תמונות')
INSERT [dbo].[Categories] ([CategoryCode], [CategoryName]) VALUES (110, N'יודאיקה')
INSERT [dbo].[Categories] ([CategoryCode], [CategoryName]) VALUES (120, N'שונות')
SET IDENTITY_INSERT [dbo].[Categories] OFF
SET IDENTITY_INSERT [dbo].[Customers] ON 

INSERT [dbo].[Customers] ([CustID], [CustPassword], [FirstName], [LastName], [CustAddress], [CustPhone]) VALUES (1, N'shiri20', N'shiri', N'doytsh', N'sgd', N'shiri')
INSERT [dbo].[Customers] ([CustID], [CustPassword], [FirstName], [LastName], [CustAddress], [CustPhone]) VALUES (2, N'sfd', N'yair', N'doytsh', N'rashbi 23', N'0544444444')
SET IDENTITY_INSERT [dbo].[Customers] OFF
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (100, N'חנוכיה', N'חנוכית נחושת יפה ושמורה . ', 110, 170.0000, N'src/assets/hanucia.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (101, N'פמוטים מקושטים', N'פמוטים לשבת מקושטים בציורים של פרפרים בחיתוך לייזר', 110, 165.0000, N'src/assets/pamotim.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (113, N'כיסוי חלה', N'בכיסוי חלה זה נרימונים בצורות וצבעים שונים', 110, 119.0000, N'src/assets/chala.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (114, N'חמסת ברכת הבית', N'חמסה אפוקסי עיטור פסיפס ברכת הבית', 110, 55.0000, N'src/assets/chamsa.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (115, N'בית מזוזה', N'מזוזה מעוצבת בעיצוב קלאסי דמוית אבני כותל לבנות', 110, 95.0000, N'src/assets/mezuza.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (119, N'מגש לחלות', N'מגש מיוחד לחלות בעיצוב פרחוני בורדו לבן ', 110, 139.0000, N'src/assets/magash.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (139, N'עלים', N'אומנות מופשטת', 100, 159.0000, N'src/assets/leaves.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (140, N'navy blue', N'אומנות אבסטרקטית', 100, 159.0000, N'src/assets/blue.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (142, N'ציור מגניב', N'השראה של רעיון ויצירתיות', 100, 169.0000, N'src/assets/magniv1.png')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (143, N'נוף ים ועצים', N'ציור קיר מרגיע ', 100, 169.0000, N'src/assets/yam.png')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (144, N'פרחים צבעוניים', N'תמונה על קנבס או זכוכית מודרנית', 100, 169.0000, N'src/assets/prachim.png')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (145, N'תמונת מעצבים ', N'תמונת מעצבים בחיתוך לייזר', 100, 369.0000, N'src/assets/lazer.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (146, N'חתולי פורצלן- מלחיות', N'מלחיות פורצלן בצורת חתול', 120, 400.0000, N'src/assets/chatul.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (147, N'סט ספלים', N'סט מיוחד בסגנון וינטג'' במשחקי לבן אדום עם נקודות', 120, 200.0000, N'src/assets/sfalim.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (148, N'קומקום חרסינה', N'קומקום לנוי בצבע כחול עם נקודות לבנות ', 120, 400.0000, N'src/assets/kumkun.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (149, N'סט סוכר/קפה ומלח', N'שלישיה איטלקית מחרסינה צבעונית מיוחדת', 120, 350.0000, N'src/assets/set.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (150, N'אגרטל זכוכית רומנטי', N'אגרטל זכוכית לבן שקוףבעבודת זכוכית מרהיבה', 120, 450.0000, N'src/assets/agartal.jpg')
INSERT [dbo].[Products] ([ProductCode], [ProductName], [ProductDescription], [CategoryCode], [Cost], [Picture]) VALUES (151, N'כד חלב וינטג'' ', N'כד אמייל רוסי חתום, צבע תכלת רגוע פרחים כחולים', 120, 200.0000, N'src/assets/cadHalav.jpg')
SET IDENTITY_INSERT [dbo].[Products] OFF
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD FOREIGN KEY([OrderCode])
REFERENCES [dbo].[Orders] ([OrderCode])
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD FOREIGN KEY([ProductCode])
REFERENCES [dbo].[Products] ([ProductCode])
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD FOREIGN KEY([CustID])
REFERENCES [dbo].[Customers] ([CustID])
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD FOREIGN KEY([CategoryCode])
REFERENCES [dbo].[Categories] ([CategoryCode])
GO
USE [master]
GO
ALTER DATABASE [Shop] SET  READ_WRITE 
GO
