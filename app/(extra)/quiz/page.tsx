'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, CheckCircle, XCircle } from 'lucide-react'

const quizData = [
    {
      section: "Foundations of Computer Science",
      questions: [
        {
          question: "1. What is the primary goal of computer science?",
          options: [
            "a) To design new hardware",
            "b) To manipulate information to solve problems",
            "c) To understand how computers process power",
            "d) To create new programming languages"
          ],
          answer: 2
        },
        {
          question: "2. What is an algorithm?",
          options: [
            "a) A set of instructions given to a computer to perform a task",
            "b) A way of organizing data in memory",
            "c) A program that runs on a computer",
            "d) A machine that executes commands"
          ],
          answer: 1
        },
        {
          question: "3. A logic gate is a fundamental component of which of the following?",
          options: [
            "a) Digital circuits",
            "b) Computer programming languages",
            "c) Data storage devices",
            "d) Web servers"
          ],
          answer: 1
        },
        {
          question: "4. In the context of an algorithm, why is 'efficiency' important?",
          options: [
            "a) It makes the algorithm easier to write",
            "b) It reduces the number of steps to solve the problem",
            "c) It minimizes the computational resources required",
            "d) It makes the code more readable"
          ],
          answer: 3
        },
        {
          question: "5. Why does a computer use the binary number system (0 and 1) for processing data?",
          options: [
            "a) It’s a simpler system for humans to understand",
            "b) It is directly related to the design of modern algorithms",
            "c) It is a natural fit for the design of electronic circuits (on/off states)",
            "d) It helps increase the computer’s processing power"
          ],
          answer: 3
        },
        {
          question: "6. Imagine you need to sort a large dataset. Which sorting algorithm would you choose for efficiently handling very large datasets, and why?",
          options: [
            "a) Bubble Sort",
            "b) Merge Sort",
            "c) Insertion Sort",
            "d) Quick Sort"
          ],
          answer: 2
        },
        {
          question: "7. What is the function of the CPU (Central Processing Unit) in a computer?",
          options: [
            "a) It stores data for later use",
            "b) It executes program instructions and performs calculations",
            "c) It manages network connections",
            "d) It displays visual output on a screen"
          ],
          answer: 2
        }
      ]
    },
    {
      section: "Data Representation and Encoding",
      questions: [
        {
          question: "8. What is the binary representation of the decimal number 6?",
          options: [
            "a) 100",
            "b) 110",
            "c) 101",
            "d) 111"
          ],
          answer: 2
        },
        {
          question: "9. How does a computer represent characters like letters or symbols?",
          options: [
            "a) By assigning each character a unique binary code (e.g., ASCII)",
            "b) By storing the characters in image format",
            "c) By converting the character to hexadecimal",
            "d) By calculating the mathematical formula for each character"
          ],
          answer: 1
        },
        {
          question: "10. What does ASCII (American Standard Code for Information Interchange) do?",
          options: [
            "a) Encodes data for secure transmission",
            "b) Converts characters into machine-readable code",
            "c) Represents integers in binary",
            "d) Optimizes compression techniques for text"
          ],
          answer: 2
        },
        {
          question: "11. How would you convert the hexadecimal number A3 to binary?",
          options: [
            "a) 10100011",
            "b) 10000011",
            "c) 11010011",
            "d) 10110011"
          ],
          answer: 1
        },
        {
          question: "12. What is the most important reason for using compression in computing?",
          options: [
            "a) To ensure faster execution of algorithms",
            "b) To reduce file size for storage or transmission",
            "c) To encrypt sensitive data",
            "d) To increase the resolution of images and videos"
          ],
          answer: 2
        }
      ]
    },
    {
      section: "Algorithms and Problem-Solving Strategies",
      questions: [
        {
          question: "13. Which of the following algorithms is most appropriate for searching through a large, sorted dataset?",
          options: [
            "a) Linear Search",
            "b) Binary Search",
            "c) Bubble Sort",
            "d) Quick Sort"
          ],
          answer: 2
        },
        {
          question: "14. Why might an algorithm with a time complexity of O(n²) be inefficient when applied to a dataset of 1,000,000 items?",
          options: [
            "a) It requires fewer steps than a linear algorithm",
            "b) It performs exponentially more operations as the dataset grows",
            "c) It uses less memory as the size of the dataset grows",
            "d) It takes constant time regardless of dataset size"
          ],
          answer: 2
        },
        {
          question: "15. What is the key principle behind the 'divide and conquer' approach in algorithms?",
          options: [
            "a) Combining different algorithms for greater efficiency",
            "b) Breaking a large problem into smaller, more manageable sub-problems",
            "c) Solving problems by brute force",
            "d) Using multiple CPUs to solve a problem in parallel"
          ],
          answer: 2
        },
        {
          question: "16. In the context of algorithm design, what is the purpose of recursion?",
          options: [
            "a) To repeat a set of instructions until a condition is met",
            "b) To solve a problem by dividing it into smaller sub-problems that repeat the same process",
            "c) To reduce the time complexity of an algorithm",
            "d) To allocate more memory for data processing"
          ],
          answer: 2
        },
        {
          question: "17. You are designing an algorithm to find the shortest path between two cities in a network of roads. Which algorithm would you use, and why?",
          options: [
            "a) Depth-First Search",
            "b) Dijkstra's Algorithm",
            "c) Merge Sort",
            "d) Quick Sort"
          ],
          answer: 2
        }
      ]
    },
    {
      section: "Data Structures and Information Processing",
      questions: [
        {
          question: "18. What is the most appropriate data structure to use when you need to store and retrieve key-value pairs efficiently?",
          options: [
            "a) Array",
            "b) Stack",
            "c) Hash Table",
            "d) Linked List"
          ],
          answer: 3
        },
        {
          question: "19. Which of the following data structures would be most suitable for implementing a system that allows both adding items at the front and removing items from the back?",
          options: [
            "a) Queue",
            "b) Stack",
            "c) Linked List",
            "d) Deque (Double-Ended Queue)"
          ],
          answer: 4
        },
        {
          question: "20. A stack follows which of the following principles?",
          options: [
            "a) First-In-First-Out (FIFO)",
            "b) Last-In-First-Out (LIFO)",
            "c) Random Access",
            "d) Sorted order"
          ],
          answer: 2
        },
        {
          question: "21. Why would you use a binary tree over a linked list when implementing an algorithm for efficiently searching large datasets?",
          options: [
            "a) Binary trees allow faster searching by dividing the data in half at each step",
            "b) Linked lists are easier to implement than binary trees",
            "c) Linked lists provide quicker sorting than binary trees",
            "d) Binary trees are more memory efficient"
          ],
          answer: 1
        },
        {
          question: "22. Which of the following is the best reason to use a graph data structure for modeling relationships between entities?",
          options: [
            "a) To store data in sorted order",
            "b) To represent hierarchical data",
            "c) To model connections and interactions between nodes (e.g., social networks, routes in maps)",
            "d) To store key-value pairs for fast retrieval"
          ],
          answer: 3
        }
      ]
    },
    {
      section: "Real-World Computing Concepts",
      questions: [
        {
          question: "23. A company wants to optimize its website for speed. Which of the following would you recommend as an important optimization technique?",
          options: [
            "a) Use a hash table to store frequently accessed data",
            "b) Use a linked list to manage user sessions",
            "c) Increase the depth of recursive function calls",
            "d) Use a queue to manage user requests"
          ],
          answer: 1
        },
        {
          question: "24. What role does an IP address play in computer networking?",
          options: [
            "a) It encrypts data sent over a network",
            "b) It identifies a device on the network, enabling communication",
            "c) It secures data during transmission",
            "d) It allocates network resources to devices"
          ],
          answer: 2
        },
        {
          question: "25. What is the primary function of a firewall in computer security?",
          options: [
            "a) To prevent unauthorized access to a computer or network",
            "b) To monitor all web traffic for performance issues",
            "c) To break down large files into smaller, more manageable pieces",
            "d) To store sensitive information securely"
          ],
          answer: 1
        }
      ]
    },
    {
      section: "Concept Integration & Critical Thinking",
      questions: [
        {
          question: "26. Imagine you are designing a new social media app. How would you use a graph data structure to efficiently implement the friendship feature?",
          options: [
            "a) Use a graph where nodes represent users, and edges represent friendship connections, allowing you to quickly find a user’s friends.",
            "b) Use a binary tree to store user names and their friend connections in sorted order for efficient retrieval.",
            "c) Use a queue to manage the addition and removal of friends in the system.",
            "d) Use a stack to track the last person who interacted with a user for future suggestions."
          ],
          answer: 1
        },
        {
          question: "27. You are designing a network protocol for a new messaging system. How could encryption play a role in ensuring the security of the system?",
          options: [
            "a) Encryption would ensure that messages are stored in an unreadable format, making them safer from unauthorized access.",
            "b) Encryption would ensure that messages are sent in an encrypted format, making it unreadable to anyone except the intended recipient.",
            "c) Encryption would speed up the transmission of messages by reducing the file size.",
            "d) Encryption would allow the server to store messages securely without risking data loss."
          ],
          answer: 2
        }
      ]
    },
    {
      section: "Advanced Questions: Integrating Concepts and Problem-Solving",
      questions: [
        {
          question: "28. Algorithm Design: Optimizing Search in a Large Dataset\nYou are tasked with designing a search algorithm for a massive dataset of 1 million records. The data is organized in a way that allows for binary search, but only if the data is sorted first. You must determine the most efficient approach to find a record.\nWhich of the following strategies would be most efficient in this case, and why?",
          options: [
            "a) Use quick sort to sort the data and then binary search the sorted array.",
            "b) Use merge sort to sort the data and then binary search the sorted array.",
            "c) Use linear search to search through the unsorted data.",
            "d) Use binary search on unsorted data after applying an in-place algorithm."
          ],
          answer: 1
        },
        {
          question: "29. Data Structures in Web Development\nYou are developing a recommendation engine for an e-commerce website. The engine needs to suggest products based on past customer purchases, where customers have bought items in clusters (e.g., users who bought A also bought B).\nWhich data structure would be the best choice for storing these associations and why?",
          options: [
            "a) Hash table for mapping users to their purchased products.",
            "b) Binary search tree for maintaining an ordered list of products.",
            "c) Graph to model the relationships between customers and products.",
            "d) Stack to store a history of customer searches for recommendations."
          ],
          answer: 3
        },
        {
          question: "30. Recursion vs. Iteration: Solving the Fibonacci Problem\nYou are given the task of computing the nth Fibonacci number. Consider the recursive approach versus the iterative approach.\nWhich of the following is the most significant disadvantage of using the recursive approach for this problem?",
          options: [
            "a) The recursive approach uses more memory due to the call stack.",
            "b) The recursive approach is easier to understand and implement than the iterative one.",
            "c) The recursive approach will result in a more efficient algorithm for large n.",
            "d) The recursive approach avoids redundant calculations by memoizing results."
          ],
          answer: 1
        },
        {
          question: "31. Complexity and Trade-offs in Data Structures\nYou are choosing a data structure to store a collection of items with frequent insertions and deletions, and you also need to be able to retrieve the minimum element in constant time.\nWhich data structure would you choose, and what is the primary trade-off involved?",
          options: [
            "a) Hash table—constant time for insertions and deletions, but not efficient for finding the minimum.",
            "b) Binary search tree—efficient for insertions, deletions, and finding the minimum, but with logarithmic time complexity.",
            "c) Heap (Min-heap)—constant time for finding the minimum, but insertion and deletion are logarithmic.",
            "d) Array—efficient for finding the minimum, but insertions and deletions take linear time."
          ],
          answer: 3
        },
        {
          question: "32. Building a Web Scraper: Algorithm and Data Structures\nYou’re building a web scraper that crawls a website to collect links and metadata. The scraper needs to visit each page, record data, and then visit all links on that page. The scraping process should stop once all pages have been visited.\nWhat data structure would best support this task, and why?",
          options: [
            "a) Queue for breadth-first traversal.",
            "b) Stack for depth-first traversal.",
            "c) Hash set for storing visited pages to avoid revisiting them.",
            "d) Linked list for storing pages in the order they are visited."
          ],
          answer: 1
        },
        {
          question: "33. Balancing Trees in Databases\nYou are tasked with designing a balanced binary search tree (BST) for use in a database. The database needs to support rapid searches, insertions, and deletions of records.\nWhich technique or structure would you use to ensure that the BST remains balanced?",
          options: [
            "a) AVL tree to ensure that the height difference between subtrees is at most 1.",
            "b) Red-Black tree to enforce balance using color-coding of nodes.",
            "c) Splay tree to automatically balance itself with each access.",
            "d) Heap to maintain a balanced structure while keeping the min element at the root."
          ],
          answer: 2
        },
        {
          question: "34. Dynamic Programming: Optimizing a Knapsack Problem\nYou are given a 0/1 knapsack problem where you must select items with a given weight and value to maximize value without exceeding a weight limit. The problem can be solved with a brute-force approach, but it's inefficient for large inputs.\nWhat algorithmic technique would you use to optimize this problem, and why?",
          options: [
            "a) Greedy algorithm—select items in descending order of value-to-weight ratio.",
            "b) Dynamic programming—build up the solution by considering smaller subproblems.",
            "c) Divide and conquer—divide the problem into smaller knapsack problems recursively.",
            "d) Backtracking—explore all possible combinations and prune the search space."
          ],
          answer: 2
        },
        {
          question: "35. Networking and Security: Choosing a Protocol\nYou are designing a secure communication protocol for sending sensitive data over a network. The protocol needs to ensure data integrity, confidentiality, and authentication.\nWhich cryptographic technique would you use to achieve all of these goals, and why?",
          options: [
            "a) Symmetric encryption to encrypt the data, ensuring confidentiality.",
            "b) Asymmetric encryption for key exchange, ensuring secure authentication.",
            "c) Hashing for ensuring data integrity.",
            "d) Public key infrastructure (PKI) combining asymmetric encryption, hashing, and digital signatures."
          ],
          answer: 4
        },
        {
          question: "36. Optimizing Code: Memory Efficiency\nYou are optimizing a program that processes large datasets and needs to store the results in memory. The data consists of 100 million integer values, and memory usage is critical.\nWhich of the following data structures would you use to minimize memory consumption while allowing efficient querying and storage?",
          options: [
            "a) Array—for fast access, but inefficient memory-wise for large datasets.",
            "b) Hash table—efficient for querying but uses more memory due to overhead.",
            "c) Bloom filter—space-efficient probabilistic data structure that allows for quick membership testing.",
            "d) Trie—efficient for storing strings but uses more memory than necessary for integers."
          ],
          answer: 3
        },
        {
          question: "37. AI and Machine Learning: Selecting the Right Model\nYou’re tasked with building a machine learning model to classify emails as spam or not spam based on various features (e.g., subject line, email body, sender). After collecting data, you need to choose the best model for this classification task.\nWhich algorithm would be most appropriate for solving this problem, and why?",
          options: [
            "a) Decision tree—easy to interpret and handle non-linear relationships.",
            "b) K-nearest neighbors (K-NN)—effective for high-dimensional data like text.",
            "c) Naive Bayes—assumes independence between features, which is effective for spam filtering.",
            "d) Support vector machine (SVM)—effective for high-dimensional, complex decision boundaries."
          ],
          answer: 3
        },
        {
          question: "38. Distributed Systems: Ensuring Fault Tolerance\nYou are designing a distributed file storage system. The system must be able to handle network partitions and failures of individual nodes, while ensuring that data is still accessible.\nWhich strategy would you use to ensure that the system is fault-tolerant?",
          options: [
            "a) Replication—store multiple copies of data across different nodes to ensure availability.",
            "b) Sharding—divide the data into partitions distributed across different servers for better scalability.",
            "c) Consistent hashing—distribute data across nodes in a way that minimizes movement of data during rebalancing.",
            "d) Distributed consensus algorithms—ensure consistency by requiring agreement between nodes before performing operations."
          ],
          answer: 1
        },
        {
          question: "39. Web Security: Preventing SQL Injection\nYour web application interfaces with a relational database. A security vulnerability has been identified: SQL injection, which occurs when untrusted data is used to construct a SQL query, allowing an attacker to execute arbitrary SQL commands.\nWhat would be the best way to mitigate this risk in your application?",
          options: [
            "a) Use prepared statements with parameterized queries to safely pass user input into SQL queries.",
            "b) Use input validation to filter out special characters from user inputs before they are processed.",
            "c) Use obfuscation techniques to hide SQL queries in the backend code.",
            "d) Encrypt all user data before storing it in the database, preventing unauthorized access."
          ],
          answer: 1
        },
        {
          question: "40. Computational Theory: P vs. NP Problem\nIn computational theory, the P vs. NP problem asks whether every problem whose solution can be verified quickly (in polynomial time) can also be solved quickly.\nWhich of the following statements is correct regarding this problem?",
          options: [
            "a) If P = NP, it would mean that every problem with a quick solution verification can also be solved efficiently.",
            "b) If P ≠ NP, it would mean that no problems exist that can be verified quickly but are inherently unsolvable.",
            "c) If P = NP, it would imply that all NP-complete problems can be solved efficiently with polynomial-time algorithms.",
            "d) If P ≠ NP, it would imply that NP problems cannot be verified in polynomial time."
          ],
          answer: 3
        }
      ]
    }
  ];  

export default function Quiz() {
  const [currentSection, setCurrentSection] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answered, setAnswered] = useState(false)

  const totalQuestions = quizData.reduce((acc, section) => acc + section.questions.length, 0)

  const handleAnswer = (index: number) => {
    if (answered) return
    setSelectedAnswer(index)
    setAnswered(true)
    if (index === quizData[currentSection].questions[currentQuestion].answer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    setAnswered(false)
    setSelectedAnswer(null)
    if (currentQuestion < quizData[currentSection].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else if (currentSection < quizData.length - 1) {
      setCurrentSection(currentSection + 1)
      setCurrentQuestion(0)
    } else {
      setShowResult(true)
    }
  }

  const progressPercentage = ((currentSection * quizData[0].questions.length + currentQuestion + 1) / totalQuestions) * 100

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Quiz Complete!</h2>
          <p className="text-xl text-center mb-6 text-gray-600">Your score: {score} out of {totalQuestions}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(score / totalQuestions) * 100}%` }}></div>
          </div>
          <p className="text-center text-gray-600 mb-4">
            {score === totalQuestions ? "Perfect score! You're a computer science genius!" :
             score >= totalQuestions * 0.8 ? "Great job! You have a solid understanding of computer science basics." :
             score >= totalQuestions * 0.6 ? "Good effort! Keep studying to improve your knowledge." :
             "You might want to review the material and try again."}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
          >
            Restart Quiz
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full"
      >
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{quizData[currentSection].section}</h2>
        <div className="mb-4 text-sm text-gray-500">Question {currentQuestion + 1} of {quizData[currentSection].questions.length}</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <h3 className="text-xl mb-4 text-gray-700">{quizData[currentSection].questions[currentQuestion].question}</h3>
        <div className="space-y-2">
          {quizData[currentSection].questions[currentQuestion].options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-3 rounded-md transition duration-300 ${
                selectedAnswer === index 
                  ? index === quizData[currentSection].questions[currentQuestion].answer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'bg-gray-100 hover:bg-gray-200'
              } border ${answered && 'cursor-not-allowed'}`}
              disabled={answered}
            >
              {option}
              {answered && index === quizData[currentSection].questions[currentQuestion].answer && (
                <CheckCircle className="inline ml-2 text-green-500" />
              )}
              {answered && selectedAnswer === index && index !== quizData[currentSection].questions[currentQuestion].answer && (
                <XCircle className="inline ml-2 text-red-500" />
              )}
            </motion.button>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="text-gray-600">Score: {score}</div>
          <button
            onClick={nextQuestion}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center ${!answered && 'opacity-50 cursor-not-allowed'}`}
            disabled={!answered}
          >
            {currentSection === quizData.length - 1 && currentQuestion === quizData[currentSection].questions.length - 1 ? 'Finish' : 'Next'}
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}