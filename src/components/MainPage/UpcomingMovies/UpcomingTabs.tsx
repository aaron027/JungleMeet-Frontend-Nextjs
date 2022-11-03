import { TabList, Tab, Spinner } from "@chakra-ui/react";
import { SectionSubTitleSeeMore } from "../Containers";
import SeeMore from "../SeeMore";
import { getPopular, getUpcoming, getTopRated } from "@/utils/axiosMovieApi";

const tabTitles = ["Upcoming Movies", "Popular", "Top 10"];

interface IUpcomingTabs {
    changeMovieListMethod: any;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}
const UpcomingTabs = ({ changeMovieListMethod, isLoading, setIsLoading }: IUpcomingTabs) => {
    const fetchMovies = async (tabTitle: string) => {
        if (tabTitle === "Upcoming Movies") {
            try {
                const { data } = await getUpcoming();
                setIsLoading(false);
                // console.log(data);
                changeMovieListMethod(data.slice(0, 10));
            } catch (err) {
                console.log(err);
            }
        } else if (tabTitle === "Popular") {
            try {
                const { data } = await getPopular();
                setIsLoading(false);
                // console.log(data);
                changeMovieListMethod(data.slice(0, 10));
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const { data } = await getTopRated();
                setIsLoading(false);
                // console.log(data);
                changeMovieListMethod(data.slice(0, 10));
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <TabList
            w="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap="29px"
            mb="50px"
            color="gray.500"
            borderBottom="0"
        >
            {tabTitles.map((tabTitle) => (
                <Tab
                    key={tabTitle}
                    fontSize="h4"
                    lineHeight="36px"
                    fontWeight="500"
                    _selected={{
                        fontSize: "30px",
                        fontWeight: "700",
                        lineHeight: "36px",
                        color: "#000",
                    }}
                    _focus={{ border: "none" }}
                    p="0"
                    onClick={() => {
                        setIsLoading(true);
                        fetchMovies(tabTitle);
                    }}
                >
                    {tabTitle}
                </Tab>
            ))}
            {isLoading && <Spinner />}
            <SectionSubTitleSeeMore>
                <SeeMore href="/allmovies" />
            </SectionSubTitleSeeMore>
        </TabList>
    );
};

export default UpcomingTabs;
