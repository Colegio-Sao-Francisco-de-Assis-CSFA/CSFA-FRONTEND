type Wrapper = 'p' | 'div' | 'span' | 'strong' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';

interface TypingEffectProps {
    sequence: (string | number)[];
    className?: string;
    wrap?: Wrapper;
}

export default TypingEffectProps;