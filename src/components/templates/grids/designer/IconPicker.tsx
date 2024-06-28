import { Component, useEffect, useState } from 'react'
import {
  X,
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
  Briefcase,
  TornadoIcon,
  Accessibility,
  Activity,
  ActivitySquare,
  AirVent,
  Airplay,
  AlarmCheck,
  AlarmClock,
  AlarmClockOff,
  AlarmMinus,
  AlarmPlus,
  Album,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  AlignCenter,
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  Ampersand,
  Ampersands,
  Anchor,
  Angry,
  Annoyed,
  Antenna,
  Aperture,
  AppWindow,
  Apple,
  Archive,
  ArchiveRestore,
  AreaChart,
  Armchair,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowBigUp,
  ArrowBigUpDash,
  ArrowDown,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownCircle,
  ArrowDownFromLine,
  ArrowDownLeft,
  ArrowDownLeftFromCircle,
  ArrowDownLeftSquare,
  ArrowDownNarrowWide,
  ArrowDownRight,
  ArrowDownRightFromCircle,
  ArrowDownRightSquare,
  ArrowDownSquare,
  ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowLeftFromLine,
  ArrowLeftRight,
  ArrowLeftSquare,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightCircle,
  ArrowRightFromLine,
  ArrowRightLeft,
  ArrowRightSquare,
  ArrowRightToLine,
  ArrowUp,
  ArrowUp01,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpCircle,
  ArrowUpDown,
  ArrowUpFromDot,
  ArrowUpFromLine,
  ArrowUpLeft,
  ArrowUpLeftFromCircle,
  ArrowUpLeftSquare,
  ArrowUpNarrowWide,
  ArrowUpRight,
  ArrowUpRightFromCircle,
  ArrowUpRightSquare,
  ArrowUpSquare,
  ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUpZA,
  ArrowsUpFromLine,
  Asterisk,
  AtSign,
  Atom,
  Award,
  Axe,
  Axis3d,
  Baby,
  Backpack,
  Badge,
  BadgeAlert,
  BadgeCheck,
  BadgeDollarSign,
  BadgeHelp,
  BadgeInfo,
  BadgeMinus,
  BadgePercent,
  BadgePlus,
  BadgeX,
  BaggageClaim,
  Ban,
  Banana,
  Banknote,
  BarChart,
  BarChart2,
  BarChart3,
  BarChart4,
  BarChartBig,
  BarChartHorizontal,
  BarChartHorizontalBig,
  Baseline,
  Bath,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
  Beaker,
  Bean,
  BeanOff,
  Bed,
  BedDouble,
  BedSingle,
  Beef,
  Beer,
  Bell,
  BellDot,
  BellMinus,
  BellOff,
  BellPlus,
  BellRing,
  Bike,
  Binary,
  Biohazard,
  Bird,
  Bitcoin,
  Blinds,
  Bluetooth,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  Bold,
  Bomb,
  Bone,
  Book,
  BookCopy,
  BookDown,
  BookKey,
  BookLock,
  BookMarked,
  BookMinus,
  BookOpen,
  BookOpenCheck,
  BookPlus,
  BookTemplate,
  BookUp,
  BookUp2,
  BookX,
  Bookmark,
  BookmarkMinus,
  BookmarkPlus,
  BoomBox,
  Bot,
  Box,
  BoxSelect,
  Boxes,
  Braces,
  Brackets,
  Brain,
  BrainCircuit,
  BrainCog,
  BringToFront,
  Brush,
  Bug,
  Building,
  Building2,
  Bus,
  Cable,
  Cake,
  CakeSlice,
  Calculator,
  Calendar,
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  CalendarHeart,
  CalendarMinus,
  CalendarOff,
  CalendarPlus,
  CalendarRange,
  CalendarSearch,
  CalendarX,
  CalendarX2,
  Camera,
  CameraOff,
  CandlestickChart,
  Candy,
  CandyCane,
  CandyOff,
  Car,
  Carrot,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  CassetteTape,
  Cast,
  Castle,
  Cat,
  Check,
  CheckCheck,
  CheckCircle,
  CheckCircle2,
  CheckSquare,
  ChefHat,
  Cherry,
  ChevronDown,
  ChevronDownCircle,
  ChevronDownSquare,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronLeftCircle,
  ChevronLeftSquare,
  ChevronRight,
  ChevronRightCircle,
  ChevronRightSquare,
  ChevronUp,
  ChevronUpCircle,
  ChevronUpSquare,
  ChevronsDown,
  ChevronsDownUp,
  ChevronsLeft,
  ChevronsLeftRight,
  ChevronsRight,
  ChevronsRightLeft,
  ChevronsUp,
  ChevronsUpDown,
  Chrome,
  Church,
  Cigarette,
  CigaretteOff,
  Circle,
  CircleDashed,
  CircleDollarSign,
  CircleDot,
  CircleDotDashed,
  CircleEllipsis,
  CircleEqual,
  CircleOff,
  CircleSlash,
  CircleSlash2,
  CircuitBoard,
  Citrus,
  Clapperboard,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardEdit,
  ClipboardList,
  ClipboardPaste,
  ClipboardSignature,
  ClipboardType,
  ClipboardX,
  Clock,
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Cloud,
  CloudCog,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudOff,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Clover,
  Club,
  Code,
  Code2,
  Codepen,
  Codesandbox,
  Coffee,
  Cog,
  Coins,
  Columns,
  Combine,
  Command,
  Compass,
  Computer,
  ConciergeBell,
  Construction,
  Contact,
  Contact2,
  Container,
  Contrast,
  Cookie,
  Copy,
  CopyCheck,
  CopyMinus,
  CopyPlus,
  CopySlash,
  CopyX,
  Copyleft,
  Copyright,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreativeCommons,
  CreditCard,
  Croissant,
  Crop,
  Cross,
  Crosshair,
  Crown,
  CupSoda,
  Currency,
  Database,
  DatabaseBackup,
  Delete,
  Dessert,
  Diamond,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Diff,
  Disc,
  Disc2,
  Disc3,
  Divide,
  DivideCircle,
  DivideSquare,
  Dna,
  DnaOff,
  Dog,
  DollarSign,
  Donut,
  DoorClosed,
  DoorOpen,
  Dot,
  Download,
  DownloadCloud,
  Dribbble,
  Droplet,
  Droplets,
  Drumstick,
  Dumbbell,
  Ear,
  EarOff,
  Egg,
  EggFried,
  EggOff,
  Equal,
  EqualNot,
  Eraser,
  Euro,
  Expand,
  ExternalLink,
  Eye,
  EyeOff,
  Facebook,
  Factory,
  Fan,
  FastForward,
  Feather,
  FerrisWheel,
  Figma,
  FileArchive,
  FileAudio,
  FileAudio2,
  FileAxis3d,
  FileBadge,
  FileBadge2,
  FileBarChart,
  FileBarChart2,
  FileBox,
  FileCheck,
  FileCheck2,
  FileClock,
  FileCode,
  FileCode2,
  FileCog,
  FileCog2,
  FileDiff,
  FileDigit,
  FileDown,
  FileEdit,
  FileHeart,
  FileImage,
  FileInput,
  FileJson,
  FileJson2,
  FileKey,
  FileKey2,
  FileLineChart,
  FileLock,
  FileLock2,
  FileMinus,
  FileMinus2,
  FileOutput,
  FilePieChart,
  FilePlus,
  FilePlus2,
  FileQuestion,
  FileScan,
  FileSearch,
  FileSearch2,
  FileSignature,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileTerminal,
  FileText,
  FileType,
  FileType2,
  FileUp,
  FileVideo,
  FileVideo2,
  FileVolume,
  FileVolume2,
  FileWarning,
  FileX,
  FileX2,
  Files,
  Film,
  Filter,
  FilterX,
  Fingerprint,
  Fish,
  FishOff,
  Flag,
  FlagOff,
  FlagTriangleLeft,
  FlagTriangleRight,
  Flame,
  Flashlight,
  FlashlightOff,
  FlaskConical,
  FlaskConicalOff,
  FlaskRound,
  FlipHorizontal,
  FlipHorizontal2,
  FlipVertical,
  FlipVertical2,
  Flower,
  Flower2,
  Focus,
  FoldHorizontal,
  FoldVertical,
  Folder,
  FolderArchive,
  FolderCheck,
  FolderClock,
  FolderClosed,
  FolderCog,
  FolderCog2,
  FolderDot,
  FolderDown,
  FolderEdit,
  FolderGit,
  FolderGit2,
  FolderHeart,
  FolderInput,
  FolderKanban,
  FolderKey,
  FolderLock,
  FolderMinus,
  FolderOpen,
  FolderOpenDot,
  FolderOutput,
  FolderPlus,
  FolderRoot,
  FolderSearch,
  FolderSearch2,
  FolderSymlink,
  FolderSync,
  FolderTree,
  FolderUp,
  FolderX,
  Folders,
  Footprints,
  Forklift,
  FormInput,
  Forward,
  Frame,
  Framer,
  Frown,
  Fuel,
  FunctionSquare,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryThumbnails,
  GalleryVertical,
  GalleryVerticalEnd,
  Gamepad2,
  GanttChart,
  GanttChartSquare,
  Gauge,
  GaugeCircle,
  Gavel,
  Gem,
  Ghost,
  Gift,
  GitBranch,
  GitBranchPlus,
  GitCommit,
  GitCompare,
  GitFork,
  GitMerge,
  GitPullRequest,
  GitPullRequestClosed,
  GitPullRequestDraft,
  Github,
  Gitlab,
  GlassWater,
  Glasses,
  Globe,
  Globe2,
  Goal,
  Grab,
  GraduationCap,
  Grape,
  Grid,
  Grip,
  GripHorizontal,
  GripVertical,
  Group,
  Hammer,
  Hand,
  HandMetal,
  HardDrive,
  HardDriveDownload,
  HardDriveUpload,
  HardHat,
  Hash,
  Haze,
  HdmiPort,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Headphones,
  Heart,
  HeartCrack,
  HeartHandshake,
  HeartOff,
  HeartPulse,
  HelpCircle,
  HelpingHand,
  Hexagon,
  Highlighter,
  Home,
  Hop,
  HopOff,
  Hotel,
  Hourglass,
  IceCream,
  IceCream2,
  ImageMinus,
  ImageOff,
  ImagePlus,
  Import,
  Inbox,
  Indent,
  IndianRupee,
  Info,
  Inspect,
  Instagram,
  Italic,
  IterationCcw,
  IterationCw,
  JapaneseYen,
  Joystick,
  Kanban,
  KanbanSquare,
  KanbanSquareDashed,
  Key,
  KeyRound,
  KeySquare,
  Keyboard,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  Landmark,
  Languages,
  Laptop,
  Laptop2,
  Lasso,
  LassoSelect,
  Laugh,
  Layers,
  Layout,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplate,
  Leaf,
  LeafyGreen,
  Library,
  LifeBuoy,
  Ligature,
  Lightbulb,
  LightbulbOff,
  LineChart,
  Link,
  Link2,
  Link2Off,
  Linkedin,
  List,
  ListChecks,
  ListEnd,
  ListFilter,
  ListMinus,
  ListMusic,
  ListOrdered,
  ListPlus,
  ListRestart,
  ListStart,
  ListTodo,
  ListTree,
  ListVideo,
  ListX,
  Loader,
  Loader2,
  Locate,
  LocateFixed,
  LocateOff,
  LogIn,
  LogOut,
  Lollipop,
  Luggage,
  Magnet,
  Mail,
  MailCheck,
  MailMinus,
  MailOpen,
  MailPlus,
  MailQuestion,
  MailSearch,
  MailWarning,
  MailX,
  Mailbox,
  Mails,
  MapPin,
  MapPinOff,
  Martini,
  Maximize,
  Maximize2,
  Medal,
  Megaphone,
  MegaphoneOff,
  Meh,
  MemoryStick,
  Menu,
  MenuSquare,
  Merge,
  MessageCircle,
  MessageSquare,
  MessageSquareDashed,
  MessageSquarePlus,
  MessagesSquare,
  Mic,
  Mic2,
  MicOff,
  Microscope,
  Microwave,
  Milestone,
  Milk,
  MilkOff,
  Minimize,
  Minimize2,
  Minus,
  MinusCircle,
  MinusSquare,
  Monitor,
  MonitorCheck,
  MonitorDot,
  MonitorDown,
  MonitorOff,
  MonitorPause,
  MonitorPlay,
  MonitorSmartphone,
  MonitorSpeaker,
  MonitorStop,
  MonitorUp,
  MonitorX,
  Moon,
  MoonStar,
  MoreHorizontal,
  MoreVertical,
  Mountain,
  MountainSnow,
  Mouse,
  MousePointer,
  MousePointer2,
  MousePointerClick,
  Move,
  Move3d,
  MoveDiagonal,
  MoveDiagonal2,
  MoveDown,
  MoveDownLeft,
  MoveDownRight,
  MoveHorizontal,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveUpLeft,
  MoveUpRight,
  MoveVertical,
  Music,
  Music2,
  Music3,
  Music4,
  Navigation,
  Navigation2,
  Navigation2Off,
  NavigationOff,
  Network,
  Newspaper,
  Nfc,
  Nut,
  NutOff,
  Octagon,
  Orbit,
  Outdent,
  Package,
  Package2,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  PackageX,
  PaintBucket,
  Paintbrush,
  Paintbrush2,
  Palette,
  Palmtree,
  PanelBottom,
  PanelBottomClose,
  PanelBottomInactive,
  PanelBottomOpen,
  PanelLeft,
  PanelLeftClose,
  PanelLeftInactive,
  PanelLeftOpen,
  PanelRight,
  PanelRightClose,
  PanelRightInactive,
  PanelRightOpen,
  PanelTop,
  PanelTopClose,
  PanelTopInactive,
  PanelTopOpen,
  Paperclip,
  Parentheses,
  ParkingCircle,
  ParkingCircleOff,
  ParkingSquare,
  ParkingSquareOff,
  PartyPopper,
  Pause,
  PauseCircle,
  PauseOctagon,
  PcCase,
  Pen,
  PenLine,
  PenSquare,
  PenTool,
  Pencil,
  PencilLine,
  PencilRuler,
  Percent,
  PersonStanding,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  Pi,
  PiSquare,
  PictureInPicture,
  PictureInPicture2,
  PieChart,
  PiggyBank,
  Pilcrow,
  PilcrowSquare,
  Pill,
  Pin,
  PinOff,
  Pipette,
  Pizza,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Play,
  PlayCircle,
  PlaySquare,
  Plug,
  Plug2,
  PlugZap,
  PlugZap2,
  Plus,
  PlusCircle,
  PlusSquare,
  Pocket,
  PocketKnife,
  Podcast,
  Pointer,
  Popcorn,
  Popsicle,
  PoundSterling,
  Power,
  PowerOff,
  Presentation,
  Printer,
  Projector,
  Puzzle,
  QrCode,
  Quote,
  Radar,
  Radiation,
  Radio,
  RadioReceiver,
  RadioTower,
  Rainbow,
  Rat,
  Ratio,
  Receipt,
  RectangleHorizontal,
  RectangleVertical,
  Recycle,
  Redo,
  Redo2,
  RedoDot,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCw,
  RefreshCwOff,
  Refrigerator,
  Regex,
  RemoveFormatting,
  Repeat,
  Repeat1,
  Repeat2,
  Replace,
  ReplaceAll,
  Reply,
  ReplyAll,
  Rewind,
  Rocket,
  RockingChair,
  RollerCoaster,
  Rotate3d,
  RotateCcw,
  RotateCw,
  Router,
  Rows,
  Rss,
  Ruler,
  RussianRuble,
  Sailboat,
  Salad,
  Sandwich,
  Satellite,
  SatelliteDish,
  Save,
  SaveAll,
  Scale,
  Scale3d,
  Scaling,
  Scan,
  ScanFace,
  ScanLine,
  ScatterChart,
  School,
  School2,
  Scissors,
  ScissorsLineDashed,
  ScissorsSquare,
  ScissorsSquareDashedBottom,
  ScreenShare,
  ScreenShareOff,
  Scroll,
  ScrollText,
  Search,
  SearchCheck,
  SearchCode,
  SearchSlash,
  SearchX,
  Send,
  SendHorizonal,
  SendToBack,
  SeparatorHorizontal,
  SeparatorVertical,
  Server,
  ServerCog,
  ServerCrash,
  ServerOff,
  Settings,
  Settings2,
  Shapes,
  Share,
  Share2,
  Sheet,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldClose,
  ShieldOff,
  ShieldQuestion,
  Ship,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Shovel,
  ShowerHead,
  Shrink,
  Shrub,
  Shuffle,
  Sigma,
  SigmaSquare,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Siren,
  SkipBack,
  SkipForward,
  Skull,
  Slack,
  Slice,
  Sliders,
  SlidersHorizontal,
  Smartphone,
  SmartphoneCharging,
  SmartphoneNfc,
  Smile,
  SmilePlus,
  Snowflake,
  Sofa,
  Soup,
  Space,
  Spade,
  Sparkle,
  Sparkles,
  Speaker,
  SpellCheck,
  SpellCheck2,
  Spline,
  Split,
  SplitSquareHorizontal,
  SplitSquareVertical,
  SprayCan,
  Sprout,
  Square,
  SquareAsterisk,
  SquareCode,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDot,
  SquareEqual,
  SquareSlash,
  SquareStack,
  Squirrel,
  Stamp,
  Star,
  StarHalf,
  StarOff,
  StepBack,
  StepForward,
  Stethoscope,
  Sticker,
  StickyNote,
  StopCircle,
  Store,
  StretchHorizontal,
  StretchVertical,
  Strikethrough,
  Subscript,
  Subtitles,
  Sun,
  SunDim,
  SunMedium,
  SunMoon,
  SunSnow,
  Sunrise,
  Sunset,
  Superscript,
  SwissFranc,
  SwitchCamera,
  Sword,
  Swords,
  Syringe,
  Table,
  Table2,
  TableProperties,
  Tablet,
  Tablets,
  Tag,
  Tags,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Target,
  Tent,
  Terminal,
  TerminalSquare,
  TestTube,
  TestTube2,
  TestTubes,
  TextCursor,
  TextCursorInput,
  TextQuote,
  TextSelect,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  Timer,
  TimerOff,
  TimerReset,
  ToggleLeft,
  ToggleRight,
  Tornado,
  Touchpad,
  TouchpadOff,
  TowerControl,
  ToyBrick,
  Train,
  Trash,
  Trash2,
  TreeDeciduous,
  TreePine,
  Trees,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  TriangleRight,
  Trophy,
  Truck,
  Tv,
  Tv2,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  Underline,
  Undo,
  Undo2,
  UndoDot,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  Unlink,
  Unlink2,
  Unlock,
  Unplug,
  Upload,
  UploadCloud,
  Usb,
  User,
  User2,
  UserCheck,
  UserCheck2,
  UserCircle,
  UserCircle2,
  UserCog,
  UserCog2,
  UserMinus,
  UserMinus2,
  UserPlus,
  UserPlus2,
  UserSquare,
  UserSquare2,
  UserX,
  UserX2,
  Users,
  Users2,
  Utensils,
  UtensilsCrossed,
  UtilityPole,
  Variable,
  Vegan,
  VenetianMask,
  Vibrate,
  VibrateOff,
  Video,
  VideoOff,
  Videotape,
  View,
  Voicemail,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Vote,
  Wallet,
  Wallet2,
  WalletCards,
  Wallpaper,
  Wand,
  Wand2,
  Warehouse,
  Watch,
  Waves,
  Webcam,
  Webhook,
  Wheat,
  WheatOff,
  WholeWord,
  Wifi,
  WifiOff,
  Wind,
  Wine,
  WineOff,
  Workflow,
  WrapText,
  Wrench,
  XCircle,
  XOctagon,
  XSquare,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface IconPickerProps {
  defaultValue?: string
  value?: string
  onValueChange?: any
}

export const IconPicker = ({
    defaultValue,
    onValueChange,
    value,
  }: IconPickerProps) =>  {

    type ComponentProps = {
    [key: string]: any
  }

  const iconMap: { [key: string]: React.FC<ComponentProps> } = {
    Accessibility: () => <Accessibility />,
    Activity: () => <Activity />,
    ActivitySquare: () => <ActivitySquare />,
    AirVent: () => <AirVent />,
    Airplay: () => <Airplay />,
    AlarmCheck: () => <AlarmCheck />,
    AlarmClock: () => <AlarmClock />,
    AlarmClockOff: () => <AlarmClockOff />,
    AlarmMinus: () => <AlarmMinus />,
    AlarmPlus: () => <AlarmPlus />,
    Album: () => <Album />,
    AlertCircle: () => <AlertCircle />,
    AlertOctagon: () => <AlertOctagon />,
    AlertTriangle: () => <AlertTriangle />,
    AlignCenter: () => <AlignCenter />,
    AlignCenterHorizontal: () => <AlignCenterHorizontal />,
    AlignCenterVertical: () => <AlignCenterVertical />,
    AlignEndHorizontal: () => <AlignEndHorizontal />,
    AlignEndVertical: () => <AlignEndVertical />,
    AlignHorizontalDistributeCenter: () => <AlignHorizontalDistributeCenter />,
    AlignHorizontalDistributeEnd: () => <AlignHorizontalDistributeEnd />,
    AlignHorizontalDistributeStart: () => <AlignHorizontalDistributeStart />,
    AlignHorizontalJustifyCenter: () => <AlignHorizontalJustifyCenter />,
    AlignHorizontalJustifyEnd: () => <AlignHorizontalJustifyEnd />,
    AlignHorizontalJustifyStart: () => <AlignHorizontalJustifyStart />,
    AlignHorizontalSpaceAround: () => <AlignHorizontalSpaceAround />,
    AlignHorizontalSpaceBetween: () => <AlignHorizontalSpaceBetween />,
    AlignJustify: () => <AlignJustify />,
    AlignLeft: () => <AlignLeft />,
    AlignRight: () => <AlignRight />,
    AlignStartHorizontal: () => <AlignStartHorizontal />,
    AlignStartVertical: () => <AlignStartVertical />,
    AlignVerticalDistributeCenter: () => <AlignVerticalDistributeCenter />,
    AlignVerticalDistributeEnd: () => <AlignVerticalDistributeEnd />,
    AlignVerticalDistributeStart: () => <AlignVerticalDistributeStart />,
    AlignVerticalJustifyCenter: () => <AlignVerticalJustifyCenter />,
    AlignVerticalJustifyEnd: () => <AlignVerticalJustifyEnd />,
    AlignVerticalJustifyStart: () => <AlignVerticalJustifyStart />,
    AlignVerticalSpaceAround: () => <AlignVerticalSpaceAround />,
    AlignVerticalSpaceBetween: () => <AlignVerticalSpaceBetween />,
    Ampersand: () => <Ampersand />,
    Ampersands: () => <Ampersands />,
    Anchor: () => <Anchor />,
    Angry: () => <Angry />,
    SunSnow: () => <SunSnow />,
    Sunrise: () => <Sunrise />,
    Sunset: () => <Sunset />,
    Superscript: () => <Superscript />,
    SwissFranc: () => <SwissFranc />,
    SwitchCamera: () => <SwitchCamera />,
    Sword: () => <Sword />,
    Swords: () => <Swords />,
    Syringe: () => <Syringe />,
    Table: () => <Table />,
    Table2: () => <Table2 />,
    TableProperties: () => <TableProperties />,
    Tablet: () => <Tablet />,
    Tablets: () => <Tablets />,
    Tag: () => <Tag />,
    Tags: () => <Tags />,
    Tally1: () => <Tally1 />,
    Tally2: () => <Tally2 />,
    Tally3: () => <Tally3 />,
    Tally4: () => <Tally4 />,
    Tally5: () => <Tally5 />,
    Target: () => <Target />,
    Tent: () => <Tent />,
    Terminal: () => <Terminal />,
    TerminalSquare: () => <TerminalSquare />,
    TestTube: () => <TestTube />,
    TestTube2: () => <TestTube2 />,
    TestTubes: () => <TestTubes />,
    TextCursor: () => <TextCursor />,
    TextCursorInput: () => <TextCursorInput />,
    TextQuote: () => <TextQuote />,
    TextSelect: () => <TextSelect />,
    Thermometer: () => <Thermometer />,
    ThermometerSnowflake: () => <ThermometerSnowflake />,
    ThermometerSun: () => <ThermometerSun />,
    ThumbsDown: () => <ThumbsDown />,
    ThumbsUp: () => <ThumbsUp />,
    Ticket: () => <Ticket />,
    Timer: () => <Timer />,
    TimerOff: () => <TimerOff />,
    TimerReset: () => <TimerReset />,
    ToggleLeft: () => <ToggleLeft />,
    ToggleRight: () => <ToggleRight />,
    Tornado: () => <Tornado />,
    Touchpad: () => <Touchpad />,
    TouchpadOff: () => <TouchpadOff />,
    TowerControl: () => <TowerControl />,
    ToyBrick: () => <ToyBrick />,
    Train: () => <Train />,
    Trash: () => <Trash />,
    Trash2: () => <Trash2 />,
    TreeDeciduous: () => <TreeDeciduous />,
    TreePine: () => <TreePine />,
    Trees: () => <Trees />,
    Trello: () => <Trello />,
    TrendingDown: () => <TrendingDown />,
    TrendingUp: () => <TrendingUp />,
    Triangle: () => <Triangle />,
    TriangleRight: () => <TriangleRight />,
    Trophy: () => <Trophy />,
    Truck: () => <Truck />,
    Tv: () => <Tv />,
    Tv2: () => <Tv2 />,
    Twitch: () => <Twitch />,
    Twitter: () => <Twitter />,
    Type: () => <Type />,
    Umbrella: () => <Umbrella />,
    Underline: () => <Underline />,
    Undo: () => <Undo />,
    Undo2: () => <Undo2 />,
    UndoDot: () => <UndoDot />,
    UnfoldHorizontal: () => <UnfoldHorizontal />,
    UnfoldVertical: () => <UnfoldVertical />,
    Ungroup: () => <Ungroup />,
    Unlink: () => <Unlink />,
    Unlink2: () => <Unlink2 />,
    Unlock: () => <Unlock />,
    Unplug: () => <Unplug />,
    Upload: () => <Upload />,
    UploadCloud: () => <UploadCloud />,
    Usb: () => <Usb />,
    User: () => <User />,
    User2: () => <User2 />,
    UserCheck: () => <UserCheck />,
    UserCheck2: () => <UserCheck2 />,
    UserCircle: () => <UserCircle />,
    UserCircle2: () => <UserCircle2 />,
    UserCog: () => <UserCog />,
    UserCog2: () => <UserCog2 />,
    UserMinus: () => <UserMinus />,
    UserMinus2: () => <UserMinus2 />,
    UserPlus: () => <UserPlus />,
    UserPlus2: () => <UserPlus2 />,
    UserSquare: () => <UserSquare />,
    UserSquare2: () => <UserSquare2 />,
    UserX: () => <UserX />,
    UserX2: () => <UserX2 />,
    Users: () => <Users />,
    Users2: () => <Users2 />,
    Utensils: () => <Utensils />,
    UtensilsCrossed: () => <UtensilsCrossed />,
    UtilityPole: () => <UtilityPole />,
    Variable: () => <Variable />,
    Vegan: () => <Vegan />,
    VenetianMask: () => <VenetianMask />,
    Vibrate: () => <Vibrate />,
    VibrateOff: () => <VibrateOff />,
    Video: () => <Video />,
    VideoOff: () => <VideoOff />,
    Videotape: () => <Videotape />,
    View: () => <View />,
    Voicemail: () => <Voicemail />,
    Volume: () => <Volume />,
    Volume1: () => <Volume1 />,
    Volume2: () => <Volume2 />,
    VolumeX: () => <VolumeX />,
    Vote: () => <Vote />,
    Wallet: () => <Wallet />,
    Wallet2: () => <Wallet2 />,
    WalletCards: () => <WalletCards />,
    Wallpaper: () => <Wallpaper />,
    Wand: () => <Wand />,
    Wand2: () => <Wand2 />,
    Warehouse: () => <Warehouse />,
    Watch: () => <Watch />,
    Waves: () => <Waves />,
    Webcam: () => <Webcam />,
    Webhook: () => <Webhook />,
    Wheat: () => <Wheat />,
    WheatOff: () => <WheatOff />,
    WholeWord: () => <WholeWord />,
    Wifi: () => <Wifi />,
    WifiOff: () => <WifiOff />,
    Wind: () => <Wind />,
    Wine: () => <Wine />,
    WineOff: () => <WineOff />,
    Workflow: () => <Workflow />,
    WrapText: () => <WrapText />,
    Wrench: () => <Wrench />,
    X: () => <X />,
    XCircle: () => <XCircle />,
    XOctagon: () => <XOctagon />,
    XSquare: () => <XSquare />,
    Youtube: () => <Youtube />,
    Zap: () => <Zap />,
    ZapOff: () => <ZapOff />,
    ZoomIn: () => <ZoomIn />,
    ZoomOut: () => <ZoomOut />
}

  const createIcon = (key: string): React.ReactNode => {
    const Icon = iconMap[key]
    if (!Icon) return null
    return <Icon key={Math.random()}></Icon>
  }

  return (
    <>
      <Select
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        value={value}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Icon" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Lucide Icons</SelectLabel>
            {Object.keys(iconMap).map((key) => (
              <SelectItem key={key} value={key}>
                <div className="flex flex-grow space-x-2">
                  <span className="flex-1 font-medium">{key}</span>
                  <span className="text-muted-foreground">
                    {createIcon(key)}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}
