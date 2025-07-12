# Single-Table Multi-Agent Data Factory Demo Datasets

This collection contains carefully designed **single-table datasets** to demonstrate the comprehensive capabilities of our multi-agent LLM-based data factory platform. Each CSV file is completely self-contained, showcasing different aspects of the system's functionality from structured data analysis to knowledge graph construction and multi-agent collaboration - all from a single table.

## 🎯 **Perfect for Single-Table Analysis Platforms**

Unlike traditional multi-table demo datasets, these tables are specifically designed for platforms that focus on **single-table question answering**. Each table contains rich, multi-dimensional data that enables complex analysis, relationship discovery, and knowledge graph construction from a single data source.

## 📊 Dataset Overview

### 1. Academic Research Database (`comprehensive_research_database.csv`)
**Purpose**: Complete academic collaboration and research impact analysis
**Key Features**:
- Multi-author collaboration networks within single table
- Research field intersections and citation patterns
- International collaboration tracking
- Funding impact analysis
- Journal ranking and impact factor correlations

**Ideal for demonstrating**:
- Entity extraction from complex fields (authors, institutions, keywords)
- Relationship discovery within table rows (author collaborations, institutional partnerships)
- Multi-hop reasoning ("Find papers connecting quantum computing and AI through common authors")
- Citation and funding impact analysis
- Geographic collaboration pattern recognition

### 2. Enterprise Sales Analytics (`enterprise_sales_analytics.csv`)
**Purpose**: Comprehensive business intelligence and sales performance analysis
**Key Features**:
- Complete customer journey from lead to renewal
- Multi-dimensional sales analysis (time, geography, product, industry)
- Sales rep performance tracking with market context
- Complex product categorization and pricing analysis
- Customer satisfaction and churn prediction data

**Ideal for demonstrating**:
- Advanced SQL aggregations and time-series analysis
- Customer segmentation and behavioral analysis
- Sales forecasting and trend identification
- Geographic and industry vertical analysis
- Revenue optimization and commission calculations

### 3. Company Projects & Teams (`comprehensive_company_projects.csv`)
**Purpose**: Complete organizational analysis and project portfolio management
**Key Features**:
- Employee-project relationships with detailed role information
- Skills mapping and certification tracking
- Cross-functional collaboration metrics
- Project complexity and risk assessment
- Performance correlation analysis

**Ideal for demonstrating**:
- Resource allocation and capacity planning
- Skill gap analysis and team optimization
- Project risk assessment and dependency tracking
- Performance correlation analysis
- Cross-functional collaboration pattern recognition

## 🎯 Single-Table Demonstration Scenarios

### Scenario 1: Advanced Structured Data Analysis

**Sample Questions**:
1. **"What are the quarterly sales trends by industry vertical, and which sales reps are driving growth in emerging markets?"**
   - *Demonstrates*: Complex time-series analysis with multi-dimensional grouping
   - *Expected*: Sophisticated SQL with date functions, grouping, and performance metrics

2. **"Create a comprehensive dashboard showing product performance across regions with profit margin analysis"**
   - *Demonstrates*: Multi-chart visualization generation from single table
   - *Expected*: Multiple coordinated visualizations (maps, trends, distributions)

3. **"Which research fields have the highest collaboration rates and funding success?"**
   - *Demonstrates*: Complex text analysis and statistical correlation
   - *Expected*: String parsing, aggregation, and correlation analysis

### Scenario 2: Knowledge Graph Construction from Single Table

**Sample Questions**:
1. **"Build a collaboration network showing how researchers connect across institutions and countries"**
   - *Demonstrates*: Entity extraction and relationship mapping from table data
   - *Expected*: Author-Institution-Country relationship graph with collaboration strength

2. **"Map the technology stack relationships in our active projects and identify skill dependencies"**
   - *Demonstrates*: Technology and skill network construction
   - *Expected*: Project-Technology-Skill relationship graph with dependency analysis

3. **"Show the customer-product-industry relationship network and identify cross-selling opportunities"**
   - *Demonstrates*: Business entity relationship discovery
   - *Expected*: Multi-entity business relationship graph with opportunity identification

### Scenario 3: Multi-Agent Collaboration & Complex Single-Table Reasoning

**Sample Questions**:
1. **"Analyze our project delivery capacity by correlating team skills, project complexity, and historical performance - what are our optimization opportunities?"**
   - *Demonstrates*: Multi-dimensional analysis requiring both Database and Knowledge Graph teams
   - *Expected Process*:
     - Database Team: Calculate capacity metrics, performance correlations
     - Knowledge Graph Team: Map skill-project relationships, identify patterns
     - Data Leader: Synthesize optimization recommendations

2. **"Which research collaborations have the highest impact potential based on author expertise, institutional rankings, and funding patterns?"**
   - *Demonstrates*: Strategic analysis combining multiple data dimensions
   - *Expected Process*:
     - Database Team: Analyze impact metrics and funding patterns
     - Knowledge Graph Team: Map collaboration networks and expertise overlap
     - Data Leader: Generate strategic collaboration recommendations

3. **"Identify sales territories with the highest growth potential by analyzing customer segments, market trends, and rep performance"**
   - *Demonstrates*: Territory optimization with market intelligence
   - *Expected Process*:
     - Database Team: Analyze sales metrics and market trends
     - Knowledge Graph Team: Map territory-customer-industry relationships
     - Data Leader: Recommend territory optimization strategies

## 🔧 Single-Table Technical Implementation

### Entity Types Extractable from Each Table

**Research Database**:
- **Authors**: first_author, second_author, third_author
- **Institutions**: first_author_institution, second_author_institution, third_author_institution
- **Research Fields**: research_field, sub_field
- **Countries**: first_author_country, second_author_country, third_author_country
- **Journals**: journal names with impact factors
- **Keywords**: extracted from keywords field

**Sales Analytics**:
- **Customers**: customer_company, customer_contact_name
- **Products**: product_name, product_category, product_subcategory
- **Sales Reps**: sales_rep_name with performance data
- **Regions**: customer_region, customer_country, customer_city
- **Industries**: customer_industry, market_segment

**Company Projects**:
- **Employees**: employee_name with skills and certifications
- **Projects**: project_name with full lifecycle data
- **Technologies**: extracted from project_tech_stack
- **Skills**: extracted from skills field
- **Departments**: department with hierarchy information

### Relationship Types Discoverable Within Tables

**Research Collaborations**:
- **COLLABORATED_WITH**: Author ↔ Author (through papers)
- **AFFILIATED_WITH**: Author → Institution
- **RESEARCHES_IN**: Author → Research Field
- **FUNDED_BY**: Paper → Funding Source
- **PUBLISHED_IN**: Paper → Journal

**Business Relationships**:
- **PURCHASED**: Customer → Product
- **SOLD_BY**: Transaction → Sales Rep
- **LOCATED_IN**: Customer → Geographic Region
- **OPERATES_IN**: Customer → Industry
- **COMPETES_WITH**: Product → Competition (from competition_beaten field)

**Organizational Networks**:
- **WORKS_ON**: Employee → Project
- **MANAGES**: Manager → Employee
- **POSSESSES_SKILL**: Employee → Skill
- **USES_TECHNOLOGY**: Project → Technology
- **COLLABORATES_WITH**: Employee ↔ Employee (through projects)

## 🚀 **Single-Table Advantages**

### **Simplified Data Management**
- No complex JOIN operations required
- All related information co-located
- Reduced data integration complexity
- Faster query performance

### **Rich Context in Single Location**
- Complete business context in one place
- Natural language queries more intuitive
- Reduced hallucination risk (all data visible)
- Better context for LLM understanding

### **Enhanced Knowledge Graph Construction**
- Entity relationships naturally embedded
- Hierarchical information preserved
- Complex many-to-many relationships supported
- Temporal relationships trackable

### **Optimal for Agent Collaboration**
- Single data source reduces complexity
- Clear decision boundaries for Database vs Knowledge Graph teams
- Simplified error handling and validation
- More predictable agent behavior

## 📈 Demonstration Value Proposition

### **Why Single-Table Analysis Excels**
1. **Reduced Complexity**: Focus on insight generation rather than data integration
2. **Better Performance**: No JOIN overhead, faster query execution
3. **Enhanced Accuracy**: Complete context reduces LLM hallucinations
4. **Simplified Deployment**: Easier data governance and security
5. **Improved User Experience**: More intuitive natural language queries

### **Platform Capabilities Demonstrated**
1. **Advanced Analytics**: Complex aggregations and statistical analysis
2. **Entity Recognition**: Sophisticated NLP for entity extraction
3. **Relationship Discovery**: Graph construction from tabular data
4. **Multi-Agent Coordination**: Intelligent task delegation between teams
5. **Visualization Generation**: Automatic chart and graph creation
6. **Strategic Insights**: High-level business intelligence synthesis

## 🎪 **Getting Started with Single-Table Demos**

1. **Load individual CSV files** into your data factory platform
2. **Start with simple queries** to verify data ingestion and basic analytics
3. **Progress to entity extraction** to demonstrate knowledge graph construction
4. **Showcase agent collaboration** with complex multi-step questions
5. **Highlight visualization capabilities** with chart generation requests
6. **Demonstrate strategic analysis** with high-level business questions

Each dataset provides a complete, self-contained demonstration environment that showcases the full spectrum of your single-table multi-agent data factory capabilities, from basic data processing to sophisticated AI-driven strategic insights. 