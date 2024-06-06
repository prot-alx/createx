import Button from "./buttons/Button";
import PlayButton from "./buttons/PlayButton";

export const ButtonBlock = () => {
    return (
        <div>
            <h1 className="text-2xl mb-4 ">Button Examples</h1>
            <div className="p-4 flex gap-4">
                <Button type="basic" size="small">
                    Button
                </Button>
                <Button type="basic" size="regular">
                    Button
                </Button>
                <Button type="basic" size="large">
                    Button
                </Button>
                <Button type="secondary">
                    Button
                </Button>
                <Button type="secondary" size="large">
                    Button
                </Button>
                <Button type="dark" size="small">
                    Button
                </Button>
                <Button type="dark" size="regular">
                    Button
                </Button>
                <Button type="white" size="small">
                    Button
                </Button>
                <Button type="white" size="large">
                    Button
                </Button>
                <PlayButton></PlayButton>
            </div>
        </div>
    )
}