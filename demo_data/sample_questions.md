# Sample Questions for Single-Table Platform Demonstration

This document provides carefully crafted questions designed to showcase the capabilities of our multi-agent data factory platform **specifically for single-table analysis**. Each question demonstrates how complex insights can be extracted from rich, comprehensive single-table datasets through advanced SQL generation, knowledge graph construction, and multi-agent collaboration.

## 🎯 **Level 1: Basic Single-Table Queries (Database Team Focus)**

### Enterprise Sales Analytics
1. **"What was the total revenue generated in Q3 2023?"**
   - *Demonstrates*: Basic aggregation with date filtering
   - *Expected*: Simple SQL SUM with quarter-based filtering

2. **"Which sales representative has the highest customer satisfaction scores?"**
   - *Demonstrates*: Aggregation with performance metrics
   - *Expected*: GROUP BY with AVG/MAX functions

3. **"Show me all Enterprise customers in the Technology Services industry"**
   - *Demonstrates*: Multi-condition filtering within single table
   - *Expected*: WHERE clause with multiple conditions

4. **"Create a chart showing monthly revenue trends across all regions"**
   - *Demonstrates*: Time series aggregation + visualization
   - *Expected*: SQL query + automatic chart generation

### Academic Research Database
5. **"How many papers were published in each research field in 2023?"**
   - *Demonstrates*: Simple counting and grouping
   - *Expected*: COUNT with GROUP BY

6. **"Which journals have the highest average impact factors?"**
   - *Demonstrates*: Statistical aggregation
   - *Expected*: AVG with GROUP BY and ORDER BY

### Company Projects Dataset
7. **"List all employees working on 'High' priority projects"**
   - *Demonstrates*: Basic filtering and data extraction
   - *Expected*: Simple WHERE clause filtering

8. **"What's the average salary by department?"**
   - *Demonstrates*: Departmental analysis
   - *Expected*: AVG with GROUP BY department

## 🔄 **Level 2: Intermediate Single-Table Analytics**

### Complex Aggregations and Calculations
9. **"Which product categories have the highest profit margins, and what's the correlation with customer satisfaction?"**
   - *Demonstrates*: Complex analytics with correlation analysis
   - *Expected*: Multi-level GROUP BY with statistical functions

10. **"What's the relationship between research funding amount and citation count across different countries?"**
    - *Demonstrates*: Cross-dimensional correlation analysis
    - *Expected*: Complex aggregation with statistical correlation

11. **"Calculate the average project completion rate by department and experience level"**
    - *Demonstrates*: Multi-dimensional performance analysis
    - *Expected*: Complex GROUP BY with calculated fields

### Text Analysis and Pattern Recognition
12. **"Which technology stacks appear most frequently in high-budget projects?"**
    - *Demonstrates*: Text parsing and correlation analysis
    - *Expected*: String analysis with aggregation and filtering

13. **"Find research papers where authors from different countries collaborated on AI-related topics"**
    - *Demonstrates*: Complex text analysis with geographic correlation
    - *Expected*: String pattern matching with multiple conditions

14. **"Identify customers who purchased multiple product categories and their churn risk patterns"**
    - *Demonstrates*: Customer behavior pattern analysis
    - *Expected*: Complex customer segmentation analysis

## 🧠 **Level 3: Knowledge Graph Construction from Single Table**

### Entity Extraction and Relationship Discovery
15. **"Build a collaboration network showing how researchers connect across institutions"**
    - *Demonstrates*: Multi-author relationship extraction from single table
    - *Expected*: Author-Institution entity extraction + collaboration relationship mapping

16. **"Map the technology skill overlap between employees on different projects"**
    - *Demonstrates*: Skill network construction from employee data
    - *Expected*: Employee-Skill-Project relationship graph construction

17. **"Show the customer-product purchasing network and identify cross-selling patterns"**
    - *Demonstrates*: Business relationship discovery
    - *Expected*: Customer-Product relationship graph with pattern analysis

### Geographic and Industry Network Analysis
18. **"Create a geographic collaboration map of international research partnerships"**
    - *Demonstrates*: Geographic relationship mapping
    - *Expected*: Country-Institution-Research collaboration network

19. **"Map industry vertical connections through our sales data and identify market expansion opportunities"**
    - *Demonstrates*: Industry relationship discovery
    - *Expected*: Industry-Customer-Product relationship analysis

20. **"Visualize the organizational hierarchy and cross-functional collaboration patterns"**
    - *Demonstrates*: Organizational network construction
    - *Expected*: Employee-Manager-Project collaboration graph

## 🚀 **Level 4: Multi-Agent Collaboration on Single Tables**

### Strategic Analysis Requiring Both Teams
21. **"Analyze our sales territory optimization opportunities by combining customer data, rep performance, and market trends"**
    - *Demonstrates*: Comprehensive territorial analysis
    - *Expected Process*:
      - Database Team: Aggregate sales metrics, calculate rep performance
      - Knowledge Graph Team: Map customer-territory-industry relationships
      - Data Leader: Synthesize territory optimization recommendations

22. **"Identify the highest-impact research collaboration opportunities based on author expertise and institutional rankings"**
    - *Demonstrates*: Research strategy optimization
    - *Expected Process*:
      - Database Team: Analyze citation metrics, funding success rates
      - Knowledge Graph Team: Map collaboration networks and expertise overlap
      - Data Leader: Generate strategic partnership recommendations

23. **"Optimize our project resource allocation by analyzing skill availability, project complexity, and delivery risk"**
    - *Demonstrates*: Resource optimization with risk analysis
    - *Expected Process*:
      - Database Team: Calculate resource utilization and project metrics
      - Knowledge Graph Team: Map skill-project-risk relationships
      - Data Leader: Recommend optimal resource allocation

### Predictive Analysis and Forecasting
24. **"Predict which customers are most likely to churn based on their purchase patterns, satisfaction scores, and market trends"**
    - *Demonstrates*: Churn prediction with multiple factors
    - *Expected Process*:
      - Database Team: Analyze purchase patterns and satisfaction trends
      - Knowledge Graph Team: Map customer behavior networks
      - Data Leader: Generate churn prevention strategies

25. **"Forecast which research fields will attract the most funding based on current collaboration patterns and publication trends"**
    - *Demonstrates*: Research trend forecasting
    - *Expected Process*:
      - Database Team: Analyze funding and publication trends
      - Knowledge Graph Team: Map field collaboration networks
      - Data Leader: Predict future research investment opportunities

## 🎭 **Level 5: Advanced Single-Table Agent Process Demonstration**

### Complex Multi-Step Reasoning from Single Table
26. **"I need a comprehensive analysis of our company's AI capability development - analyze our current talent, project experience, and market positioning"**
    - *Demonstrates*: Multi-dimensional capability assessment
    - *Expected Process*:
      - Data Leader: "Let me examine our AI-related skills and projects"
      - Database Team: Query AI skills distribution, project outcomes
      - Data Leader: "Now I'll analyze collaboration patterns and expertise depth"
      - Knowledge Graph Team: Map AI expertise networks and knowledge transfer
      - Data Leader: "Finally, let me correlate with market performance"
      - Database Team: Analyze AI project revenue impact and client satisfaction
      - Data Leader: Synthesize comprehensive AI capability assessment

27. **"Help me identify the most promising international expansion opportunities based on our sales data, customer feedback, and market intelligence"**
    - *Demonstrates*: Strategic market analysis from sales table
    - *Expected Process*:
      - Data Leader: Explore geographic sales patterns
      - Database Team: Analyze revenue by region and customer satisfaction
      - Data Leader: Investigate market penetration and competition
      - Knowledge Graph Team: Map customer-industry-geography relationships
      - Data Leader: Assess competitive landscape from sales data
      - Database Team: Analyze competitive wins/losses by region
      - Data Leader: Generate expansion strategy recommendations

### Process Transparency for Single-Table Analysis
28. **"Analyze the research impact potential of interdisciplinary collaborations - show me your complete reasoning process"**
    - *Demonstrates*: Transparent multi-step analysis
    - *Expected*: Complete agent reasoning chain visible to user

29. **"I want to understand the relationship between employee skills, project complexity, and delivery success - walk me through your analysis"**
    - *Demonstrates*: Educational agent process demonstration
    - *Expected*: Step-by-step agent collaboration explanation

## 📊 **Visualization & Single-Table Interaction**

### Advanced Chart Generation from Rich Tables
30. **"Create a comprehensive sales dashboard with revenue trends, geographic distribution, and customer satisfaction metrics"**
    - *Demonstrates*: Multi-chart dashboard from single table
    - *Expected*: Coordinated visualization suite

31. **"Visualize the research collaboration network with funding flows and impact metrics"**
    - *Demonstrates*: Network visualization with quantitative overlays
    - *Expected*: Interactive research collaboration graph

32. **"Generate an organizational chart showing skill distributions and project assignments"**
    - *Demonstrates*: Hierarchical visualization with overlay data
    - *Expected*: Interactive org chart with skill mapping

### Interactive Single-Table Exploration
33. **"Let me explore patterns in this sales data - what unexpected insights can you discover?"**
    - *Demonstrates*: Autonomous pattern discovery
    - *Expected*: Agent-driven analysis with surprising findings

34. **"Show me the hidden relationships in our project data that might not be obvious"**
    - *Demonstrates*: Advanced relationship discovery
    - *Expected*: Non-obvious pattern identification and explanation

## 🎪 **Single-Table Edge Cases & Error Recovery**

### Handling Data Complexity
35. **"Find all collaborations between researchers in quantum computing and machine learning"**
    - *Demonstrates*: Complex text pattern matching across fields
    - *Expected*: Sophisticated string analysis and relationship discovery

36. **"Identify sales representatives who consistently exceed targets in competitive markets"**
    - *Demonstrates*: Multi-factor performance analysis
    - *Expected*: Complex filtering with multiple performance criteria

### Graceful Degradation
37. **"Tell me about the performance of our non-existent 'SuperProduct'"**
    - *Demonstrates*: Graceful handling of non-existent entities
    - *Expected*: Clear explanation and alternative suggestions

38. **"Show me revenue trends for last year"** (when current date context is ambiguous)
    - *Demonstrates*: Date context handling and clarification
    - *Expected*: Agent requests date clarification or makes reasonable assumptions

## 📋 **Single-Table Demonstration Flow Recommendations**

### For Technical Audiences:
1. **Start with Level 1** (demonstrate SQL generation capability)
2. **Progress to Level 3** (show knowledge graph construction from single table)
3. **Highlight Level 4** (showcase agent collaboration advantages)
4. **Deep-dive Level 5** (demonstrate process transparency)

### For Business Audiences:
1. **Begin with Level 2** (business-relevant analytics)
2. **Show Level 4** (strategic insights and optimization)
3. **Demonstrate visualization** (charts and dashboards)
4. **Focus on ROI** (efficiency gains from single-table approach)

### For Comprehensive Single-Table Demos:
1. **Quick Level 1 overview** (5 minutes) - Basic capabilities
2. **Level 3 knowledge graph demo** (10 minutes) - Advanced entity extraction
3. **Level 4 agent collaboration** (15 minutes) - Strategic analysis
4. **Level 5 process transparency** (10 minutes) - Educational deep-dive
5. **Interactive Q&A** (10 minutes) - Custom questions

## 🌟 **Single-Table Platform Advantages Highlighted**

### **Demonstration Value Points**
1. **Simplicity**: No complex data integration required
2. **Performance**: Faster queries without JOINs
3. **Accuracy**: Complete context reduces hallucinations
4. **Scalability**: Easy to add new tables independently
5. **User Experience**: More intuitive natural language queries
6. **Deployment**: Simplified data governance and security

This question set demonstrates that sophisticated multi-agent analysis doesn't require complex multi-table setups. Rich, well-designed single tables can provide complete demonstration environments for showcasing advanced TableQA capabilities while maintaining simplicity and performance advantages. 