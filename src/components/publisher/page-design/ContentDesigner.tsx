'use client'

import { useState, useCallback, useRef, SetStateAction } from 'react'
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Icons } from '@/styles/icons'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import CarouselTemplate from '@/components/templates/carousel/CarouselTemplate'
import LinkableImageCard from '@/components/templates/cards/LinkableImageCard'
import LinkableImageCardsSection from '@/components/templates/cards/LinkableImageCardsSection'
import BlockQuoteTemplate from '@/components/templates/blockquote/BlockQuoteTemplate'
import UnOrderedListTemplate from '@/components/templates/lists/UnorderedListTemplate'
import IconSection2ColsGrid from '@/components/templates/grids/IconSection2ColsGrid'
import IconSectionCentredDescriptionWithIconBlocks from '@/components/templates/grids/IconSectionCentredDescriptionWithIconBlocks'
import IconSectionCircleIconsCentreAligned from '@/components/templates/grids/IconSectionCircleIconsCentreAligned'
import IconSectionDescriptionOnLeftIconBlocksOnRight from '@/components/templates/grids/IconSectionDescriptionOnLeftIconBlocksOnRight'
import IconSectionSolidIconWithHoverEffect from '@/components/templates/grids/IconSectionSolidIconWithHoverEffect'
import IconSectionStackedCards from '@/components/templates/grids/IconSectionStackedCards'
import HeroFormCenterAlignedSearchWithTags from '@/components/templates/heros/HeroFormCenterAlignedSearchWithTags'
import HeroFormCenterAlignedWithAForm from '@/components/templates/heros/HeroFormCenterAlignedWithAForm'
import HeroFormSignUpForm from '@/components/templates/heros/HeroFormSignUpForm'
import HeroSectionCentredWithImage from '@/components/templates/heros/HeroSectionCentredWithImage'
import HeroSectionGradientBackground from '@/components/templates/heros/HeroSectionGradientBackground'
import HeroSectionImageWithReviews from '@/components/templates/heros/HeroSectionImageWithReviews'
import HeroSectionSimpleCentred from '@/components/templates/heros/HeroSectionSimpleCentred'
import HeroSectionWithEmailInput from '@/components/templates/heros/HeroSectionWithEmailInput'
import IconTemplate from '@/components/templates/icon/IconTemplate'
import VideoTemplate from '@/components/templates/video/VideoTemplate'
import EmbeddedTemplate from '@/components/templates/embedded/EmbeddedTemplate'
import MarkdownTemplate from '@/components/templates/markdown/MarkdownTemplate'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { SubTree } from '@/lib/subtree'
import { toast } from 'sonner'
import { api } from '@/trpc/client'
import SectionPropertySheet from '@/components/publisher/page-design/SectionPropertySheet'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

type ComponentProps = {
  [key: string]: any
}

type Node = {
  key: any
  value: string
  children: Node[]
  properties: ComponentProps
}

const componentsMap: { [key: string]: React.FC<ComponentProps> } = {
  block: ({ children, ...props }: ComponentProps) => (
    <div {...props}>{children}</div>
  ),
  image: (props: ComponentProps) => (
    <Image src={props.src} alt={props.alt} {...props} />
  ),
  carousel: ({ children, ...props }: ComponentProps) => (
    <CarouselTemplate children={children} {...props} />
  ),
  list: ({ children, ...props }: ComponentProps) => (
    <UnOrderedListTemplate children={children} {...props} />
  ),
  card: ({ children, ...props }: ComponentProps) => (
    <LinkableImageCard children={children} {...props} />
  ),
  icon: ({ children, ...props }: ComponentProps) => (
    <IconTemplate children={children} {...props} />
  ),
  video: ({ children, ...props }: ComponentProps) => (
    <VideoTemplate children={children} {...props} />
  ),
  embedded: ({ children, ...props }: ComponentProps) => (
    <EmbeddedTemplate children={children} {...props} />
  ),
  markdown: ({ children, ...props }: ComponentProps) => (
    <MarkdownTemplate children={children} {...props} />
  ),
  LinkableImageCard: ({ children, ...props }: ComponentProps) => (
    <LinkableImageCard children={children} {...props} />
  ),
  LinkableImageCardsSection: ({ children, ...props }: ComponentProps) => (
    <LinkableImageCardsSection children={children} {...props} />
  ),
  hr: (props: ComponentProps) => (
    <hr className={cn('my-5 md:my-5', props?.className)} />
  ),
  blockquote: (props: ComponentProps) => <BlockQuoteTemplate {...props} />,
  p: (props: ComponentProps) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', props?.className)}>
      {props?.text}
    </p>
  ),
  lead: (props: ComponentProps) => (
    <p className={cn('text-xl text-muted-foreground', props?.className)}>
      {props?.text}
    </p>
  ),
  muted: (props: ComponentProps) => (
    <p className={cn('text-sm text-muted-foreground', props?.className)}>
      {props?.text}
    </p>
  ),
  small: (props: ComponentProps) => (
    <p className={cn('text-sm font-medium leading-none', props?.className)}>
      {props?.text}
    </p>
  ),
  large: (props: ComponentProps) => (
    <p className={cn('text-lg font-semibold', props?.className)}>
      {props?.text}
    </p>
  ),
  code: (props: ComponentProps) => (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        props?.className
      )}
    >
      {props?.text}
    </code>
  ),
  h1: (props: ComponentProps) => (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        props?.className
      )}
    >
      {props?.text}
    </h1>
  ),
  h2: (props: ComponentProps) => (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        props?.className
      )}
    >
      {props?.text}
    </h2>
  ),
  h3: (props: ComponentProps) => (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        props?.className
      )}
    >
      {props?.text}
    </h3>
  ),
  h4: (props: ComponentProps) => (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        props?.className
      )}
    >
      {props?.text}
    </h4>
  ),
  h5: (props: ComponentProps) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        props?.className
      )}
    >
      {props?.text}
    </h5>
  ),
  h6: (props: ComponentProps) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        props?.className
      )}
    >
      {props?.text}
    </h6>
  ),

  IconSection2ColsGrid: ({ children, ...props }: ComponentProps) => (
    <IconSection2ColsGrid children={children} {...props} />
  ),
  IconSectionCentredDescriptionWithIconBlocks: ({
    children,
    ...props
  }: ComponentProps) => (
    <IconSectionCentredDescriptionWithIconBlocks
      children={children}
      {...props}
    />
  ),
  IconSectionCircleIconsCentreAligned: ({
    children,
    ...props
  }: ComponentProps) => (
    <IconSectionCircleIconsCentreAligned children={children} {...props} />
  ),
  IconSectionDescriptionOnLeftIconBlocksOnRight: ({
    children,
    ...props
  }: ComponentProps) => (
    <IconSectionDescriptionOnLeftIconBlocksOnRight
      children={children}
      {...props}
    />
  ),
  IconSectionSolidIconWithHoverEffect: ({
    children,
    ...props
  }: ComponentProps) => (
    <IconSectionSolidIconWithHoverEffect children={children} {...props} />
  ),
  IconSectionStackedCards: ({ children, ...props }: ComponentProps) => (
    <IconSectionStackedCards children={children} {...props} />
  ),
  HeroFormCenterAlignedSearchWithTags: ({
    children,
    ...props
  }: ComponentProps) => (
    <HeroFormCenterAlignedSearchWithTags children={children} {...props} />
  ),
  HeroFormCenterAlignedWithAForm: ({ children, ...props }: ComponentProps) => (
    <HeroFormCenterAlignedWithAForm children={children} {...props} />
  ),
  HeroFormSignUpForm: ({ children, ...props }: ComponentProps) => (
    <HeroFormSignUpForm children={children} {...props} />
  ),
  HeroSectionCentredWithImage: ({ children, ...props }: ComponentProps) => (
    <HeroSectionCentredWithImage children={children} {...props} />
  ),
  HeroSectionGradientBackground: ({ children, ...props }: ComponentProps) => (
    <HeroSectionGradientBackground children={children} {...props} />
  ),
  HeroSectionImageWithReviews: ({ children, ...props }: ComponentProps) => (
    <HeroSectionImageWithReviews children={children} {...props} />
  ),
  HeroSectionSimpleCentred: ({ children, ...props }: ComponentProps) => (
    <HeroSectionSimpleCentred children={children} {...props} />
  ),
  HeroSectionWithEmailInput: ({ children, ...props }: ComponentProps) => (
    <HeroSectionWithEmailInput children={children} {...props} />
  ),
}

const createComponent = (node: Node): React.ReactNode => {
  const Component = componentsMap[node.value]
  if (!Component) return null

  if (node?.children && node?.children?.length > 0) {
    const children = node.children.map((child, index) =>
      createComponent({ ...child, key: index })
    )
    return (
      <Component
        key={node.properties.key || Math.random()}
        {...node.properties}
      >
        {children}
      </Component>
    )
  }

  return (
    <Component
      key={node.properties.key || Math.random()}
      {...node.properties}
    ></Component>
  )
}

const ItemTypes = {
  SECTION: 'section',
}

interface SectionProps {
  id: number
  text: string
  index: number
  moveSection: (dragIndex: number, hoverIndex: number) => void
  removeSection: (id: number) => void
  selectSection: (id: number) => void
  isSelected: boolean
  color: string
  sectionType: string
  componentToRender: any
}

interface SectionData {
  id: number
  text: string
  color: string
  sectionType: string
  node: any
}

interface DragItem {
  index: number
  id: string
  type: string
}

// @ts-ignore
const PropertyPopover = ({ section, properties, onChange }) => {
  if (!section) return null

  const sectionType =
    section && section?.sectionType
      ? section.sectionType.toUpperCase()
      : 'Component'
  const sectionProps =
    section && section?.node?.properties ? section.node.properties : null
  if (sectionProps) {
    for (const [key, value] of Object.entries(sectionProps)) {
      console.log(`${key}: ${value}`)
    }
  }

  //      {JSON.stringify(section)}

  const handleInputChange = (key: string, newValue: string) => {
    onChange({ ...properties, [key]: newValue })
  }

  const saveChanges = () => {
    // TODO: Take the current values and map them to the properties of the node in the subtree
  }

  return (
    <>
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">{` ${sectionType} Properties`}</h4>
          <p className="text-sm text-muted-foreground">
            Set the properties for the component.
          </p>
        </div>
        <div className="grid gap-2">
          {Object.entries(properties).map(([key, value]) => (
            <div className="grid grid-cols-3 items-center gap-4">
              <div key={key} className="mb-4">
                <label className="block font-bold mb-2">{key}</label>
                {/* @ts-ignore */}
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="border rounded p-2 w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <Button onClick={saveChanges}>Apply</Button>
      </div>
    </>
  )
}

const Section = ({
  id,
  text,
  index,
  moveSection,
  removeSection,
  selectSection,
  isSelected,
  color,
  sectionType,
  componentToRender,
  section,
  duplicateSection,
}) => {
  const [properties, setProperties] = useState({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  })

  const ref = useRef<HTMLDivElement>(null)

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: any }>({
    accept: ItemTypes.SECTION,
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover: (item, monitor) => {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) return

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

      moveSection(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.SECTION,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  const handlePropertiesChange = (newProperties: any) => {
    setProperties(newProperties)
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild={true}>
          <div
            ref={ref}
            style={{
              opacity: isDragging ? 0.5 : 1,
              height: isDragging ? 100 : '',
            }}
            className={`relative p-4 mb-4 ${isSelected ? 'border-4 border-solid border-cyan-500' : 'border border-dashed border-gray-400'}`}
            onClick={() => selectSection(id)}
            data-handler-id={handlerId}
          >
            <PopoverContent
              className="w-80 drop-shadow-2xl border-4 border-solid border-cyan-500 "
              align="center"
              side="top"
            >
              <PropertyPopover
                section={section}
                properties={properties}
                onChange={handlePropertiesChange}
              />
            </PopoverContent>
            <div
              ref={preview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-grab"
            >
              <Icons.menu className="w-5 h-5 text-gray-600" />
            </div>
            <div className="absolute top-2 right-2 z-20">
              <Icons.copy
                className="mr-5 mt-5 w-6 h-6 text-cyan-500 drop-shadow-xl cursor-pointer hover:text-cyan-700 hover:w-8 hover:h-8"
                onClick={(e) => {
                  duplicateSection(id)
                }}
              />
            </div>
            <AlertDialog>
              <AlertDialogTrigger>
                <Icons.trash className="w-6 h-6 m-2 ml-6 text-red-500 drop-shadow-xl cursor-pointer hover:text-red-700 hover:w-8 hover:h-8" />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    this block and remove it from your layout.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={(e) => {
                      removeSection(id)
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            {componentToRender}
          </div>
        </PopoverTrigger>
      </Popover>
    </>
  )
}

export interface ContentDesignerProps {
  subTree: any
  pageId: any
  authorId: any
  subsiteId: any
}

export const ContentDesigner = ({
  subTree,
  pageId,
  authorId,
  subsiteId,
}: ContentDesignerProps) => {
  const [sections, setSections] = useState<SectionData[]>([
    {
      id: 1,
      text: 'Initial Section',
      color: 'bg-white',
      sectionType: '',
      node: null,
    },
  ])
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(1)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }  

  const addSection = (color: string, sectionType: string) => {
    const sectionId = sections[sections?.length - 1]?.id
    const newId = sectionId && sections.length > 0 ? sectionId + 1 : 1

    let newNode: Node | null = null

    if (sectionType === 'HeroSectionCentredWithImage') {
      newNode = {
        key: Math.random(),
        value: sectionType,
        properties: {
          className: '',
          header: 'Title',
          subHeader: 'Sub Title',
          imgSrc: 'https://picsum.photos/id/10/800/800',
        },
        children: [],
      }
    }

    if (sectionType === 'HeroSectionGradientBackground') {
      newNode = {
        key: Math.random(),
        value: sectionType,
        properties: {
          className: '',
          header: 'Title',
          subHeader: 'Sub Title',
          tagLine: 'This is the Tag Line',
        },
        children: [],
      }
    }

    setSections([
      ...sections,
      { id: newId, text: `some text`, color, sectionType, node: newNode },
    ])

    setSelectedSectionId(newId)

    // scroll to the bottom of the page 
    scrollToBottom()
  }

  const moveSection = useCallback((dragIndex: number, hoverIndex: number) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      const [draggedSection]: any = newSections.splice(dragIndex, 1)
      newSections.splice(hoverIndex, 0, draggedSection)
      return newSections
    })
  }, [])

  const removeSection = (id: number) => {
    setSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    )
    if (selectedSectionId === id) {
      setSelectedSectionId(null)
    }
  }

  const duplicateSection = (id: number) => {
    const sectionCopy =
      sections.find((section) => section.id === selectedSectionId) || null
    if (sectionCopy) {
      setSelectedSectionId(null)
      sectionCopy.id = sections.length + 1
      setSections((prevSections) => {
        const newSections = [...prevSections]
        newSections.push(sectionCopy)
        return newSections
      })
      toast('Section copied')
    }
  }

  const selectSection = (id: number) => {
    setSelectedSectionId(id)
  }

  const setText = (id: number, text: string) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, text } : section
      )
    )
  }

  let sectionMap: any = []
  if (subTree && subTree?.children?.length > 0) {
    {
      subTree.children.map((node: any, index: number) =>
        sectionMap.push({
          id: index,
          text: node?.value,
          color: 'bg-white',
          sectionType: node?.value,
          node,
        })
      )
    }
  }

  if (sections.length === 1) {
    setSections(sectionMap)
  }

  // Edit Page Mutations
  const savePageMutation = api.pages.updateLayoutTemplate.useMutation({
    onSuccess: (modifiedPage) => {
      console.log('onSuccess >>> modifiedPage >>> ', modifiedPage)
    },
    onError: (error) =>
      toast('Failed to Edit Post', {
        duration: 2000,
        description: error.message,
      }),
  })
  const isSavingPage = savePageMutation.isLoading

  const savePage = async () => {
    const subtree = new SubTree<string>()
    subtree.addNode('root', null, {})

    const imageProps = {
      className: 'inherit',
      src: 'https://picsum.photos/id/64/800/800',
      alt: 'image',
    }

    if (!sections || sections?.length === 0) return
    sections.map((section) => {
      const subTreeComponent = section?.node
      console.log('component >>> ', subTreeComponent)
      subtree.addNode(
        subTreeComponent.value,
        'root',
        subTreeComponent.properties
      )
      const componentChildren = subTreeComponent?.children
        ? subTreeComponent.children
        : []
      if (componentChildren && componentChildren?.length > 0) {
        componentChildren.map((child: any) => {
          subtree.addNode(child.value, subTreeComponent.value, imageProps)
        })
      }
    })

    const layoutTemplate = subtree.toJSON()
    console.log(layoutTemplate)
    // TODO: Save to DB
    toast('Saving Changes...')

    if (!layoutTemplate) {
      console.log('layoutTemplate is null')
      toast('There was a problem saving draft. Please try again.')
      return
    }

    if (!pageId) {
      console.log('pageId is null')
      toast('There was a problem saving draft. Please try again.')
      return
    }

    if (!authorId) {
      console.log('authorId is null')
      toast('There was a problem saving draft. Please try again.')
      return
    }

    if (!subsiteId) {
      console.log('subsiteId is null')
      toast('There was a problem saving draft. Please try again.')
      return
    }

    let savedContent: any = null
    let mutationVars: any = null
    mutationVars = {
      pageId: pageId,
      layoutTemplate: layoutTemplate,
      authorId: authorId,
      subsiteId: subsiteId,
    }
    savedContent = await savePageMutation.mutateAsync(mutationVars)

    if (!savedContent) {
      console.log('There was a problem saving draft: savedContent is null')
      toast('There was a problem saving draft. Please try again.')
      return
    }

    if (!savedContent?.id) {
      console.log('savedContent.id is null')
      return
    }

    toast.success('Content saved successfully.')
  }

  const loadFromTemplate = () => {}

  const saveAsTemplate = () => {}

  const openLibrary = () => {}

  const previewPage = () => {}

  const publishPage = () => {}

  return (
    <DndProvider backend={HTML5Backend}>
      <Sheet>
        <div className="flex flex-col">
          <div className="flex p-4">
            <SheetTrigger asChild>
              <Button
                className="w-[64] mr-4 bg-gray-400"
                variant={'default'}
                onClick={openLibrary}
              >
                Library
              </Button>
            </SheetTrigger>
            <Button
              className="w-[64] mr-4 bg-gray-400"
              variant={'default'}
              onClick={loadFromTemplate}
            >
              Load Template
            </Button>
            <Button
              className="w-[64] mr-4 bg-gray-400"
              variant={'default'}
              onClick={previewPage}
            >
              Preview
            </Button>
            <Button
              className="w-[64] mr-4 bg-gray-400"
              variant={'default'}
              onClick={savePage}
            >
              Save
            </Button>
            <Button
              className="w-[64] mr-4 bg-gray-400"
              variant={'default'}
              onClick={saveAsTemplate}
            >
              Save as Template
            </Button>
            <Button
              className="w-[64] bg-gray-400"
              variant={'default'}
              onClick={publishPage}
            >
              Publish
            </Button>
          </div>
          <div className="relative flex p-4">
            <SheetContent side="right" className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Content Library</SheetTitle>
                <SheetDescription className="pb-4">
                  Add Content to your page from your library of components and templates 
                </SheetDescription>
              </SheetHeader>
              <>
                <hr />
                <div className="flex flex-col p-2 pt-4">
                  <Button
                    onClick={() =>
                      addSection('bg-blue-500', 'HeroSectionCentredWithImage')
                    }
                    className="text-xs px-4 py-2 mb-4 text-white bg-gray-400 rounded"
                  >
                    Hero Section Centred With Image
                  </Button>
                  <Button
                    onClick={() =>
                      addSection(
                        'bg-purple-500',
                        'HeroSectionGradientBackground'
                      )
                    }
                    className="text-xs px-4 py-2 mb-4 text-white bg-gray-400 rounded"
                  >
                    Hero Section Gradient Background
                  </Button>
                </div>
              </>
            </SheetContent>
            <div className=" pr-4">
              <div className="h-full" style={{ width: '92vw' }}>
                {sections.map((section, index) => (
                  <Section
                    key={section.id}
                    id={section.id}
                    text={section.text}
                    index={index}
                    moveSection={moveSection}
                    removeSection={removeSection}
                    selectSection={selectSection}
                    isSelected={section.id === selectedSectionId}
                    color={section.color}
                    sectionType={section.sectionType}
                    componentToRender={createComponent({
                      ...section?.node,
                      key: index,
                    })}
                    section={section}
                    duplicateSection={duplicateSection}
                  />
                ))}
              </div>
            </div>
          </div>
           <div className=" fixed bottom-4 right-4 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 focus:outline-none"  >
            <Icons.arrowUp className="w-5 h-5 text-white "  onClick={scrollToTop}  />
          </div>
        </div>
      </Sheet>
    </DndProvider>
  )
}
