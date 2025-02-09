import { Editor } from "@tiptap/core";
import { Icon } from "@chakra-ui/react";
import { TbBold, TbItalic, TbStrikethrough, TbH1, TbH2, TbH3, TbUnderline } from "react-icons/tb";
import { RiParagraph, RiDoubleQuotesL, RiCodeBoxLine } from "react-icons/ri";
import { AiOutlineUnorderedList, AiOutlineOrderedList } from "react-icons/ai";
import { VscHorizontalRule } from "react-icons/vsc";
import { BiUndo, BiRedo } from "react-icons/bi";
import { MenuBarWrapper } from "./NewPostPage.style";
import { MdOutlineColorize } from "react-icons/md";

type IMenuBarProps = {
    editor: Editor | null;
};

const MenuBar = ({ editor }: IMenuBarProps) => {
    if (!editor) {
        return null;
    }

    return (
        <MenuBarWrapper>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "is-active" : ""}
                type="button"
            >
                <Icon as={TbBold} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}
                type="button"
            >
                <Icon as={TbItalic} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={editor.isActive("underline") ? "is-active" : ""}
                type="button"
            >
                <Icon as={TbUnderline} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive("strike") ? "is-active" : ""}
                type="button"
            >
                <Icon as={TbStrikethrough} />
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive("paragraph") ? "is-active" : ""}
                type="button"
            >
                <Icon as={RiParagraph} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
                type="button"
            >
                <Icon as={TbH1} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
                type="button"
            >
                <Icon as={TbH2} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
                type="button"
            >
                <Icon as={TbH3} />
            </button>
            <div>
                <div>
                    <input
                        type="color"
                        onInput={(event) => editor.chain().focus().setColor(event.target.value).run()}
                        value={editor.getAttributes("textStyle").color}
                    />
                    <Icon as={MdOutlineColorize} />
                </div>
            </div>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
                type="button"
            >
                <Icon as={AiOutlineUnorderedList} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive("orderedList") ? "is-active" : ""}
                type="button"
            >
                <Icon as={AiOutlineOrderedList} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive("codeBlock") ? "is-active" : ""}
                type="button"
            >
                <Icon as={RiCodeBoxLine} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive("blockquote") ? "is-active" : ""}
                type="button"
            >
                <Icon as={RiDoubleQuotesL} />
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()} type="button">
                <Icon as={VscHorizontalRule} />
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                type="button"
            >
                <Icon as={BiUndo} />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                type="button"
            >
                <Icon as={BiRedo} />
            </button>
        </MenuBarWrapper>
    );
};

export default MenuBar;
