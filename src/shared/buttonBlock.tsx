import Button from "./buttons/Button";
import PlayButton from "./buttons/PlayButton";

export const ButtonBlock = () => {
    return (
        <div>
            <h1 className="text-2xl mb-4 ">Button Examples</h1>
            <div className="p-4 flex gap-4">
                <Button color="primary" size="small">
                    Button
                </Button>
                <Button color="white" size="regular">
                    Button
                </Button>
                <Button color="primary" size="large">
                    Button
                </Button>
                <Button color="primary" disabled>
                    Button
                </Button>
                <Button color="white" size="large" disabled>
                    Button
                </Button>
                <Button color="gray-1" size="large">
                    Button
                </Button>
                <Button color="gray-2" size="large">
                    Button
                </Button>
                <PlayButton></PlayButton>
            </div>
        </div>
    )
}