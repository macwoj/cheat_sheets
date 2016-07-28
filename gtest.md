```c++
class ParamTestClass: public ::testing::TestWithParam<boost::tuple<std::string,std::string,int,int> > {};
TEST_P(ParamTestClass, testImplementation) {
        GetParam().get<0>();
}
INSTANTIATE_TEST_CASE_P(TESTS,
        ParamTestClass,
        ::testing::Values(
           boost::make_tuple("test","1",3,1),
           boost::make_tuple("test","2",3,2)
        )
);
```
