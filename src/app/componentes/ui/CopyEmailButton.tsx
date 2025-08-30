import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Copy, Check } from "lucide-react"

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false)
  const email = "youremail@example.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center justify-center gap-2 
                 px-5 py-3 rounded-full font-medium text-sm  
                 bg-blue-700 text-white shadow-lg 
                 hover:bg-blue-800 cursor-pointer transition-all 
                 w-[14rem] overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Check className="w-5 h-5" />
            Email Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Copy className="w-5 h-5" />
            Copy Email Address
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton
