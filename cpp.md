# string
[source](http://stackoverflow.com/questions/5343190/how-do-i-replace-all-instances-of-a-string-with-another-string)
```c++
std::string replaceString(std::string subject, const std::string& search,
                          const std::string& replace) {
    size_t pos = 0;
    while ((pos = subject.find(search, pos)) != std::string::npos) {
         subject.replace(pos, search.length(), replace);
         pos += replace.length();
    }
    return subject;
}

void replaceStringInPlace(std::string& subject, const std::string& search,
                          const std::string& replace) {
    size_t pos = 0;
    while ((pos = subject.find(search, pos)) != std::string::npos) {
         subject.replace(pos, search.length(), replace);
         pos += replace.length();
    }
}
```

# Boost
[source]http://www.boost.org/doc/libs/1_61_0/doc/html/foreach.html
```c++
#include <boost/foreach.hpp>
BOOST_FOREACH( char ch, hello )
{
    std::cout << ch;
}

typedef std::map<int, int> map_t;
map_t mmap;  
BOOST_FOREACH( map_t::value_type &i, mmap )
    i.second++;
```
