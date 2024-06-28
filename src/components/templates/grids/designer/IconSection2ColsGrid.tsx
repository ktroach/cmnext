import { useEffect, useState } from 'react'
import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
  Briefcase,
  X,
  TornadoIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import IconPicker from './IconPicker'

export interface IconSection2ColsGridProps_Designer {
  children?: any
  designMode?: boolean
}

export default function IconSection2ColsGrid_Designer({
  children,
  designMode,
}: IconSection2ColsGridProps_Designer) {
  const [properties, setProperties] = useState<object | null>(null)
  const [selectedIcon, setSelectedIcon] = useState('')
  const [selected, setSelected] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!properties) {
      let p: any = {}
      p['iconBlock1_icon'] = 'Briefcase'
      p['iconBlock1_h3'] = 'Creative minds'
      p['iconBlock1_paragraph'] =
        `We choose our teams carefully. Our people are the secret to great work.`
      setProperties(p)
    }
  }, [properties])

  const handlePropertiesChange = (newProperties: any) => {
    setProperties(newProperties)
  }

  const handleInputChange = (key: string, newValue: string) => {
    if (!properties) return
    handlePropertiesChange({ ...properties, [key]: newValue })
  }

  const saveProperties = () => {
    setSelected(false)
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
    setSelected(true)
  }

  const handleClosePopover = () => {
    setOpen(false)
    setSelected(false)
  }

  const onIconChanged = (value: any) => {
    setSelectedIcon(value)
  }

  const selectedStyle = selected
    ? 'flex border-4 border-cyan-600'
    : 'flex hover:border-4 hover:border-cyan-600'

  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
             {/* Col */}
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className={selectedStyle}>
                  <>
                    <Popover open={open} onOpenChange={handleOpen}>
                      <PopoverTrigger asChild={true}>
                        <div className={selectedStyle}>
                          <Briefcase className="flex-shrink-0 mt-2 h-8 w-8" />
                          {/* {properties?.iconBlock1_icon} */}
                          <div className="ms-5 sm:ms-8">
                            <h3 className="text-base sm:text-lg font-semibold">
                                {properties?.iconBlock1_h3}
                            </h3>
                            <p className="mt-1 text-muted-foreground">
                                {properties?.iconBlock1_paragraph}
                            </p>
                          </div>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className={selectedStyle}>
                        <>
                          <div className="fixed top-2 right-4">
                            <X
                              className="flex-shrink-0 mt-2 h-5 w-5"
                              onClick={handleClosePopover}
                            />
                          </div>
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <h4 className="font-medium leading-none">
                                Icon Block #1
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Set the properties for Icon Block #1
                              </p>
                            </div>
                            <div className="grid gap-2">
                              <div
                                className="grid grid-cols-1 items-center gap-4"
                                key="iconBlock1"
                              >
                                <div className="mb-4">
                                  <label className="block font-bold mb-2">
                                    Icon
                                  </label>
                                  <IconPicker
                                    onValueChange={onIconChanged}
                                    defaultValue=""
                                    value={selectedIcon}
                                  />
                                </div>
                                <div className="mb-4">
                                  <label className="block font-bold mb-2">
                                    H3
                                  </label>
                                  <input
                                    type="text"
                                    value={properties?.iconBlock1_h3}
                                    onChange={(e) =>
                                      handleInputChange(
                                        'iconBlock1_h3',
                                        e.target.value
                                      )
                                    }
                                    className="border rounded p-2 w-full"
                                  />
                                </div>
                                <div className="mb-4">
                                  <label className="block font-bold mb-2">
                                    Paragraph
                                  </label>
                                  <textarea
                                    value={properties?.iconBlock1_paragraph}
                                    onChange={(e) =>
                                      handleInputChange(
                                        'iconBlock1_paragraph',
                                        e.target.value
                                      )
                                    }
                                    className="border rounded p-2 w-full h-fit"
                                  />
                                </div>
                              </div>
                            </div>
                            <Button onClick={saveProperties}>Apply</Button>
                          </div>
                        </>
                      </PopoverContent>
                    </Popover>
                  </>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Effortless updates
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Benefit from automatic updates to all boards any time you
                    need to make a change to your website.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Strong empathy
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We&apos;ve user tested our own process by shipping over 1k
                    products for clients.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
            {/* End Col */}

            {/* Col */}                        
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <TrophyIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Conquer the best
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We stay lean and help your product do one thing well.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <UsersIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Designing for people
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We actively pursue the right balance between functionality
                    and aesthetics, creating delightful experiences.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Simple and affordable
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    From boarding passes to movie tickets, there&apos;s pretty
                    much nothing you can&apos;t do.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
            {/* End Col */}


          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  )
}
