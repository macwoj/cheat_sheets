```c++
class ParamTestClass: public ::testing::TestWithParam<boost::tuple<std::string,std::string,int,int> > {};
TEST_P(ParamTestClass, testImplementation) {
        GetParam().get<0>();
        SCOPED_TRACE("A");      // This trace point will be included in
                                // every failure in this scope.
}
INSTANTIATE_TEST_CASE_P(TESTS,
        ParamTestClass,
        ::testing::Values(
           boost::make_tuple("test","1",3,1),
           boost::make_tuple("test","2",3,2)
        )
);
```
http://stackoverflow.com/questions/16491675/how-to-send-custom-message-in-google-c-testing-framework
```c++
namespace testing
{
 namespace internal
 {
  enum GTestColor {
      COLOR_DEFAULT,
      COLOR_RED,
      COLOR_GREEN,
      COLOR_YELLOW
  };

  extern void ColoredPrintf(GTestColor color, const char* fmt, ...);
 }
}
#define PRINTF(...)  do { testing::internal::ColoredPrintf(testing::internal::COLOR_GREEN, "[          ] "); testing::internal::ColoredPrintf(testing::internal::COLOR_YELLOW, __VA_ARGS__); } while(0)

// C++ stream interface
class TestCout : public std::stringstream
{
public:
    ~TestCout()
    {
        PRINTF("%s",str().c_str());
    }
};

#define TEST_COUT  TestCout()
```
